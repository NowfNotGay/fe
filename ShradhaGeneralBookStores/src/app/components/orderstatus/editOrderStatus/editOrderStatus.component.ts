import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';


@Component({
    selector: 'app-root',
    templateUrl: './editOrderStatus.component.html',

})

export class EditOrderStatusComponent implements OnInit{
  order:OrderStatus = new OrderStatus();
  orderStatusFormGroup: FormGroup;
  constructor(

    private _orderStatusService: OrderStatusService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router
  ) {}
    ngOnInit() {
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.order.id = id;
        this._orderStatusService.get(id).then(result=>{
          this.order = result[0] as OrderStatus;

          //set value from
          this.orderStatusFormGroup.get('id').setValue(this.order.id);
          this.orderStatusFormGroup.get('name').setValue(this.order.name);
        
          this.orderStatusFormGroup.get('createdAt').setValue(this.order.createdAt);
        })
      });

      this.orderStatusFormGroup = this.formbuilder.group({
        id:[''],
        name:[''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let orderStatus = this.orderStatusFormGroup.value as OrderStatus;
      this._orderStatusService.update(orderStatus).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
