import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { Publisher } from 'src/app/models/publisher.model';
import { PublisherService } from 'src/app/Service/publisher.service';


@Component({
    selector: 'app-root',
    templateUrl: './editPublisher.component.html',

})

export class EditPublisherComponent implements OnInit{
  publisher: Publisher = new Publisher();
  publisherFormGroup: FormGroup;
  constructor(
    private _publisherService: PublisherService,
    private formbuilder: FormBuilder,
    private activevateRoute:ActivatedRoute,
    private router: Router
  ) {}
    ngOnInit() {
      //get data for form group
      this.activevateRoute.paramMap.subscribe(c=>{
        var id = parseInt(c.get('id'));
        this.publisher.id = id;
        this._publisherService.get(id).then(result=>{
          this.publisher = result[0] as Publisher;

          //set value from
          this.publisherFormGroup.get('id').setValue(this.publisher.id);
          this.publisherFormGroup.get('name').setValue(this.publisher.name);
          this.publisherFormGroup.get('nameShort').setValue(this.publisher.nameShort);
          this.publisherFormGroup.get('location').setValue(this.publisher.location);
          this.publisherFormGroup.get('contactNumber').setValue(this.publisher.contactNumber);
          this.publisherFormGroup.get('createdAt').setValue(this.publisher.createdAt);
        })
      });


      //create form group add Id
      this.publisherFormGroup = this.formbuilder.group({
        id:[''],
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
      this._publisherService.update(publisher).then(result=>{
        if(result as true){
          alert("THanhf cong");
        }
      })
    }

    reset(){
      this.ngOnInit();
    }
}
