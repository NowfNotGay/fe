import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { Publisher } from 'src/app/models/publisher.model';
import { PublisherService } from 'src/app/Service/publisher.service';
import { Voucher } from 'src/app/models/voucher.model';
import { VoucherService } from 'src/app/Service/voucher.service';


@Component({
    selector: 'app-root',
    templateUrl: './editVoucher.component.html',

})

export class EditVoucherComponent implements OnInit{
  voucher: Voucher = new Voucher();
  voucherFormGroup: FormGroup;
  constructor(
    private _voucherService: VoucherService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router
  ) {}
    ngOnInit() {
      //get data for form group
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.voucher.id = id;
        this._voucherService.get(id).then(result=>{
          this.voucher = result[0] as Voucher;

          //set value from
          this.voucherFormGroup.get('id').setValue(this.voucher.id);
          this.voucherFormGroup.get('name').setValue(this.voucher.name);
          this.voucherFormGroup.get('varityCode').setValue(this.voucher.varityCode);
          this.voucherFormGroup.get('discount').setValue(this.voucher.discount);
          this.voucherFormGroup.get('condition').setValue(this.voucher.condition);
          this.voucherFormGroup.get('quantity').setValue(this.voucher.quantity);
          this.voucherFormGroup.get('timeStart').setValue(this.voucher.timeStart);
          this.voucherFormGroup.get('timeEnd').setValue(this.voucher.timeEnd);
          this.voucherFormGroup.get('createdAt').setValue(this.voucher.createdAt);
        })
      });


      //create form group add Id
      this.voucherFormGroup = this.formbuilder.group({
        id:[''],
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
      this._voucherService.update(voucher).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
