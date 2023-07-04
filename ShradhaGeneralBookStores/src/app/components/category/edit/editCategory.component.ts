import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/models/category.model';


@Component({
  templateUrl: './editCategory.component.html',
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm: FormGroup;
  categories: Category[];
  category1: Category = new Category();
  parentid: number;
  name: string;
  category: Category = new Category();
  constructor(
    private _categoryService: CategoryService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.activevateRoute.paramMap.subscribe(c=>{
      var id = parseInt(c.get('id'));
      this.category.id = id;
      this._categoryService.get(id).then(result=>{
        this.category = result[0] as Category;
        console.dir(this.category);

        //set value from
        this.editCategoryForm.get('id').setValue(this.category.id);
        this.editCategoryForm.get('name').setValue(this.category.name);
        this.editCategoryForm.get('parentId').setValue(this.category.parentId);


        //set data categories
        this.category1.name = '-----------------';
        this.category1.id = 0;
        this._categoryService.readnextid(id).then(result=>{
          this.categories = result as Category[];
          this.categories.push(this.category1);
          this.categories.sort((a,b) =>a.id - b.id);
        },
        error=>{
          console.log(error);

        })

      })


    })
    this.editCategoryForm = this.formbuilder.group({
      id:[''],
      name: [''],
      parentId: [''],
      createdAt: [moment().format("DD/MM/YYYY HH:mm:ss")],
      updatedAt: [moment().format("DD/MM/YYYY HH:mm:ss")]
    });

  }
  save(){
    this.category = this.editCategoryForm.value as Category;
    this._categoryService.update(this.category).then(result=>{
      if(result as true){
        alert("THanhf cong");
      }
    })
    console.dir(this.category);
  }

  reset(){
    this.ngOnInit();
  }
}
