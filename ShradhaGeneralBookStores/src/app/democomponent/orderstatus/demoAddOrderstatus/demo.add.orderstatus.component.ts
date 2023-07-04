import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { OrderStatusService } from "src/app/Service/orderstatus.service";
import { OrderStatus } from "src/app/models/orderstatus.model";


@Component({
    selector: 'app-root',
    templateUrl: './demo.add.orderstatus.component.html',
    providers: [MessageService]
})
export class DemoAddOrderstatusAdminComponent implements OnInit{
  orderstatusFormGroup: FormGroup
  constructor(
    private _orderStatus: OrderStatusService,
    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.orderstatusFormGroup = this.formBuilder.group({
      name:['',[
        Validators.required,
      ]],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let oderstatus: OrderStatus = this.orderstatusFormGroup.value as OrderStatus;
    console.dir(oderstatus);
    this._orderStatus.create(oderstatus).then(result=>{
      if(result as true){
        alert("THanhf cong");
      }
    })
  }

}
