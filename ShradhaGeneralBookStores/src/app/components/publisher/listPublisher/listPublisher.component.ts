import { OrderStatus } from '../../../models/orderstatus.model';
import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthorService } from 'src/app/Service/author.service';
import * as moment from 'moment';
import { Author } from 'src/app/models/author.model';
import { OrderStatusService } from 'src/app/Service/orderstatus.service';
import { Publisher } from 'src/app/models/publisher.model';
import { PublisherService } from 'src/app/Service/publisher.service';


@Component({
    selector: 'app-root',
    templateUrl: './listPublisher.component.html',

})

export class ListPublisherComponent implements OnInit{

  publishers: Publisher[];
  constructor(
    private _publisherService: PublisherService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {

    this._publisherService.read().then(result=>{

      this.publishers = result as Publisher[];
    },
    error=>{

    })
  }

  deleted(id: number){
    if(confirm('Are you sure you want to delete')){
      this._publisherService.delete(id).then(result=>{
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
