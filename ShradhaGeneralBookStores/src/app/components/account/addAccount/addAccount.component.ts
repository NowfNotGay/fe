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
import { AccountService } from 'src/app/Service/account.service';
import { Account } from 'src/app/models/account.model';
import { RoleService } from 'src/app/Service/role.service';
import { Role } from 'src/app/models/role.model';
import { AccountAPI } from 'src/app/modelapi/accountapi.model';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './addAccount.component.html',
})

export class AddAccountComponent implements OnInit{
  roles: Role[];
  password: string;
  dontexist: boolean = false;
  accountFormGroup: FormGroup;
  constructor(
    private _roleService: RoleService,
    private utils: UtilsServiceService,
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this._roleService.read().then(result => {
        this.roles = result as Role[];
      });
      this.accountFormGroup = this.formbuilder.group({
        email: [''],
        password: [''],
        firstName: [''],
        lastName: [''],
        phone: [''],
        avatar: ['no-avatar.jpg'],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        roleId: [''],
      });
    }

    save(){
      // this._accountService.register(account).then(result=>{
      //   if(result as true){
      //     alert("THanhf cong");
      //   }
      // })]
      if(this.dontexist){
        let account = this.accountFormGroup.value as AccountAPI;
        this._accountService.create(account).then(result=>{
          if(result as boolean){
            // alert("THanhf cong");
            this.utils.updateToast('Successfully Added')
            this.router.navigate(['listcategory']);
          }
        });
      }

    }
    checkExist(evt:any){
      let email = evt.target.value as string;
      this._accountService.checkexists(email).then(result=>{
        if(result as boolean){
          this.dontexist = false;
          console.log(this.dontexist);
        }else{
          this.dontexist = true;
          console.log(this.dontexist);
        }
      });
    }

    reset(){
      this.ngOnInit();
    }
}
