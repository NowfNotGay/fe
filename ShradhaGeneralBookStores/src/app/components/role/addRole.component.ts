import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { OrderStatus } from 'src/app/models/orderstatus.model';
import { PaymentMethodService } from 'src/app/Service/paymentmethod.service';
import { PaymentMethod } from 'src/app/models/paymentmethod.model';
import { RoleService } from 'src/app/Service/role.service';
import { Role } from 'src/app/models/role.model';


@Component({
    selector: 'app-root',
    templateUrl: './addRole.component.html',

})

export class AddRoleComponent implements OnInit{

  roleFormGroup: FormGroup;
  constructor(
    private _roleService: RoleService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {

      this.roleFormGroup = this.formbuilder.group({
        name:[''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let role = this.roleFormGroup.value as Role;
      this._roleService.create(role).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
