import { PaymentMethod } from '../models/paymentmethod.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class PaymentMethodService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(paymentMethod: PaymentMethod){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'PaymentMethod/Create',paymentMethod));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'PaymentMethod/Read'));
    }
    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'PaymentMethod/get?id=' + id));
    }
    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'PaymentMethod/Delete?id=' + id));
    }

    async update(paymentMethod: PaymentMethod){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'PaymentMethod/update',paymentMethod));
    }
}
