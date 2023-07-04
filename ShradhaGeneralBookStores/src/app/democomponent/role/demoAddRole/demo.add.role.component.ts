import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";
import { RoleService } from "src/app/Service/role.service";
import { Role } from "src/app/models/role.model";


@Component({
    selector: 'app-root',
    templateUrl: './demo.add.role.component.html',
    providers: [MessageService]
})
export class DemoAddRoleAdminComponent implements OnInit{
  roleFormGroup: FormGroup
  constructor(

    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private _roleService: RoleService
  ){}

  ngOnInit(): void {
    this.roleFormGroup = this.formBuilder.group({
      name:['',[
        Validators.required
      ]],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let role: Role = this.roleFormGroup.value as Role;
    console.dir(role);
    this._roleService.create(role).then(result=>{
      if(result as true){
        alert("THanhf cong");
      }
    })
  }
 
}