import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";
import { PaymentMethodService } from "src/app/Service/paymentmethod.service";
import { PaymentMethod } from "src/app/models/paymentmethod.model";


@Component({
    selector: 'app-root',
    templateUrl: './demo.add.paymentmethod.component.html',
    providers: [MessageService]
})
export class DemoAddPaymentmethodAdminComponent implements OnInit{
  paymentmethodFormGroup: FormGroup
  constructor(
    private _paymentService:PaymentMethodService,
    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.paymentmethodFormGroup = this.formBuilder.group({
      name:['',[
        Validators.required
      ]],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let paymentmethod: PaymentMethod = this.paymentmethodFormGroup.value as PaymentMethod;
    console.dir(paymentmethod);
    this._paymentService.create(paymentmethod).then(result=>{
      if(result as true){
        alert("thanh success cong");
      }
    })
  }

}
