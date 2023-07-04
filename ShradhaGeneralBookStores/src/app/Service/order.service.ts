import { Order } from '../models/order.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class OrderService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(order: Order){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Order/Create',order));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Order/GetListParent'));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Order/Delete?id=' + id));
    }

    async update(order: Order){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Order/update',order));
    }
}
