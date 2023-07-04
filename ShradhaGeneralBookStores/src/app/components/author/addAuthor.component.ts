import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';


@Component({
    selector: 'app-root',
    templateUrl: './addAuthor.component.html',

})

export class AddAuthorComponent implements OnInit{

  authorFormGroup: FormGroup;
  constructor(
    private _authorService: AuthorService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {

      this.authorFormGroup = this.formbuilder.group({
        name:[''],
        biography:[''],
        yearOfBirth: [''],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let author = this.authorFormGroup.value as Author;
      author.yearOfBirth = author.yearOfBirth.toString();
      this._authorService.create(author).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
