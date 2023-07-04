import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { Publisher } from 'src/app/models/publisher.model';
import { PublisherService } from 'src/app/Service/publisher.service';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/Service/role.service';


@Component({
    selector: 'app-root',
    templateUrl: './editRole.component.html',

})

export class EditRoleComponent implements OnInit{
  role: Role = new Role();
  roleFormGroup: FormGroup;
  constructor(
    private _roleService: RoleService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router
  ) {}
    ngOnInit() {
      //get data for form group
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.role.id = id;
        this._roleService.get(id).then(result=>{
          this.role = result[0] as Publisher;

          //set value from
          this.roleFormGroup.get('id').setValue(this.role.id);
          this.roleFormGroup.get('name').setValue(this.role.name);
          this.roleFormGroup.get('createdAt').setValue(this.role.createdAt);
        })
      });


      //create form group add Id
      this.roleFormGroup = this.formbuilder.group({
        id:[''],
        name:[''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let role = this.roleFormGroup.value as Publisher;
      this._roleService.update(role).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
