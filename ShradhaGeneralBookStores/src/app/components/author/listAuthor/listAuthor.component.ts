import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';


@Component({
    selector: 'app-root',
    templateUrl: './listAuthor.component.html',

})

export class ListAuthorComponent implements OnInit{
  authors: Author[];
  constructor(
    private _authorService: AuthorService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {
      this._authorService.read().then(result=>{
        this.authors = result as Author[];
      })

    }
}
