import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as moment from 'moment';

import { PublisherService } from 'src/app/Service/publisher.service';
import { Publisher } from 'src/app/models/publisher.model';


@Component({
    selector: 'app-root',
    templateUrl: './addPublisher.component.html',

})

export class AddPublisherComponent implements OnInit{

  publisherFormGroup: FormGroup;
  constructor(
    private _publisherService: PublisherService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
    ngOnInit() {

      this.publisherFormGroup = this.formbuilder.group({
        name:[''],
        nameShort:[''],
        location:[''],
        contactNumber:0,
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
      });
    }

    save(){
      let publisher = this.publisherFormGroup.value as Publisher;
      this._publisherService.create(publisher).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
