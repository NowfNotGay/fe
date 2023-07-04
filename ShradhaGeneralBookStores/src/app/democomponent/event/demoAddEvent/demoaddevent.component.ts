import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
import { EventService } from "src/app/Service/event.service";


@Component({
    selector: 'app-root',
    templateUrl: './demoaddevent.component.html',
    providers: [MessageService]
})
export class DemoAddEventAdminComponent implements OnInit{
  eventFormGroup: FormGroup
  constructor(
    private _eventService: EventService,
    private _route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.eventFormGroup = this.formBuilder.group({
      name:['',[
        Validators.required,
      ]],
      photo:[''],
      createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
      updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')]
    });
  }
  save(){
    let event: Event = this.eventFormGroup.value;
    console.dir(event);
  }
  onUpload(event) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
}
}