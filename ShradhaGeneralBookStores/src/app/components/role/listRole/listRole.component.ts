import { OrderStatus } from '../../../models/orderstatus.model';
import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/Service/role.service';


@Component({
    selector: 'app-root',
    templateUrl: './listRole.component.html',

})

export class ListRoleComponent implements OnInit{

  roles: Role[];
  constructor(
    private _roleService: RoleService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {

    this._roleService.read().then(result=>{

      this.roles = result as Role[];
    },
    error=>{

    })
  }

  deleted(id: number){
    if(confirm('Are you sure you want to delete')){
      this._roleService.delete(id).then(result=>{
        if(result as boolean){
          alert('Deleted');
          this.ngOnInit();
        }
        else{
          alert('Cannot delete');
        }
      });
    }

  }
}
