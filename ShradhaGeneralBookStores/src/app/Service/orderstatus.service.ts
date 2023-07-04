import { OrderStatus } from '../models/orderstatus.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class OrderStatusService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(orderStatus: OrderStatus){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'OrderStatus/Create',orderStatus));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'OrderStatus/Read'));
    }
    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'OrderStatus/get?id=' + id));
    }
    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'OrderStatus/Delete?id=' + id));
    }

    async update(orderStatus: OrderStatus){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'OrderStatus/update',orderStatus));
    }
}
