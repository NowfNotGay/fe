import { Account } from 'src/app/models/account.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';
import { AccountService } from 'src/app/Service/account.service';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/Service/role.service';


@Component({
  selector: 'app-root',
  templateUrl: './listAccount.component.html',
})
export class ListAccountComponent implements OnInit {
  accounts: Account[];
  roles: Role[];
  constructor(
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router,
    private _roleService: RoleService,
  ) {}
  ngOnInit() {
    this._accountService.read().then(result=>{
      this.accounts = result as Account[];
      console.log(this.accounts);
    },
    error=>{
    })

    this._roleService.read().then(result=>{
      this.roles = result as Role[];
      console.log(this.roles);

    },
    error=>{
    })
  }
  deleted(id: number){


  }

}
