import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AuthorService } from "src/app/Service/author.service";
import { Author } from "src/app/models/author.model";

@Component({
    selector: 'app-root',
    templateUrl: './demoaddauthor.component.html'
})
export class DemoAddAuthorAdminComponent implements OnInit{
  authorFormGroup: FormGroup
  email:string
  constructor(
    private _authorService: AuthorService,
    private _route: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.authorFormGroup = this.formBuilder.group({
      name:['',[
        Validators.required,
      ]],
      biography:[''],
      yearOfBirth: ['',[
        Validators.required,
      ]],
      email:['',[
        Validators.required,
        Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)
      ]],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }

  save(){
    let author: Author = this.authorFormGroup.value as Author;
    author.yearOfBirth = author.yearOfBirth.toString();
    console.dir(author);
    this._authorService.create(author).then(result=>{
      if(result as true){
        alert("THanhf cong");
      }
    })

  }
}
