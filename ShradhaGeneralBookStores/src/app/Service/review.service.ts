import { Review } from '../models/review.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ReviewService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(review: Review){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Review/Create',review));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Review/GetListParent'));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Review/Delete?id=' + id));
    }

    async update(review: Review){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Review/update',review));
    }
}
