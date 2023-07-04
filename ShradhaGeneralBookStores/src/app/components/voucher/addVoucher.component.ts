import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { VoucherService } from 'src/app/Service/voucher.service';
import { Voucher } from 'src/app/models/voucher.model';


@Component({
    selector: 'app-root',
    templateUrl: './addVoucher.component.html',

})

export class AddVoucherComponent implements OnInit{

  voucherFormGroup: FormGroup;
  constructor(
    private _voucherService: VoucherService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {

      this.voucherFormGroup = this.formbuilder.group({
        name:[''],
        varityCode:[''],
        discount:0,
        condition:0,
        quantity:0,
        timeStart:[''],
        timeEnd:[''],
        status:false,
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let voucher = this.voucherFormGroup.value as Voucher;
      this._voucherService.create(voucher).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
