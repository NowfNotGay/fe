import { Invoice } from '../models/invoice.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class InvoiceService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(invoice: Invoice){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Invoice/Create',invoice));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Invoice/GetListParent'));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Invoice/Delete?id=' + id));
    }

    async update(invoice: Invoice){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Invoice/update',invoice));
    }
}
