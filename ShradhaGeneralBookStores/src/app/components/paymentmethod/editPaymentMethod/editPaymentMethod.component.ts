import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { PaymentMethodService } from 'src/app/Service/paymentmethod.service';
import { PaymentMethod } from 'src/app/models/paymentmethod.model';


@Component({
    selector: 'app-root',
    templateUrl: './editPaymentMethod.component.html',

})

export class EditPaymentMethodComponent implements OnInit{
  payment:PaymentMethod = new PaymentMethod();
  paymentMethodFormGroup: FormGroup;
  constructor(
    private _paymentMethodService: PaymentMethodService,
    private activevateRoute:ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.payment.id = id;
        this._paymentMethodService.get(id).then(result=>{
          this.payment = result[0] as PaymentMethod;

          console.log(this.payment);

          //set value from
          this.paymentMethodFormGroup.get('id').setValue(this.payment.id);
          this.paymentMethodFormGroup.get('name').setValue(this.payment.name);
          this.paymentMethodFormGroup.get('createdAt').setValue(this.payment.createdAt);
        })
      });

      this.paymentMethodFormGroup = this.formbuilder.group({
        id:[''],
        name:[''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let paymentMethod = this.paymentMethodFormGroup.value as PaymentMethod;
      this._paymentMethodService.update(paymentMethod).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
