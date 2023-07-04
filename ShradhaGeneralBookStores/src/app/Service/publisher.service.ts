import { Publisher } from '../models/publisher.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class PublisherService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(publisher: Publisher){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Publisher/Create',publisher));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Publisher/Read'));
    }

    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Publisher/get?id=' + id));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Publisher/Delete?id=' + id));
    }

    async update(publisher: Publisher){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Publisher/update',publisher));
    }
}
