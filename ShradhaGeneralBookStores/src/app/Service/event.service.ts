import { Event } from '../models/event.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class EventService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(event: Event){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Event/Create',event));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Event/GetListParent'));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Event/Delete?id=' + id));
    }

    async update(event: Event){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Event/update',event));
    }
}
