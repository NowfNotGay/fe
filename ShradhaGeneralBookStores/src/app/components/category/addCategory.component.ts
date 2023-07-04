import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';
import { Category } from 'src/app/models/category.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './addCategory.component.html',
  providers: [MessageService]
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  categories: Category[];
  category1: Category = new Category();
  parentid: number;
  name: string;
  constructor(
    private _categoryService: CategoryService,
    private formbuilder: FormBuilder,
    private router: Router,
    private utils: UtilsServiceService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.category1.name = '-----------------';
    this.category1.id = 0;
    this._categoryService.read().then(result=>{

      this.categories = result as Category[];
      this.categories.push(this.category1);
      this.categories.sort((a,b) =>a.id - b.id);
    },
    error=>{

    })

    this.addCategoryForm = this.formbuilder.group({
      name: [''],
      parentId: [''],
      createdAt: [moment().format("DD/MM/YYYY HH:mm:ss")],
      updatedAt: [moment().format("DD/MM/YYYY HH:mm:ss")]
    });
  }
  save(){
    let category = this.addCategoryForm.value as Category;


    this._categoryService.create(category).then(result=>{
      if(result as true){
        // alert("THanhf cong");
        this.utils.updateToast('dit me may them thanh cong r nhe')
        this.router.navigate(['listcategory']);
      }
    })
    // console.dir(category);

  }

  reset(){
    this.ngOnInit();
  }
}
