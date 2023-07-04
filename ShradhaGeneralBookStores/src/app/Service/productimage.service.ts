import { ProductImage } from '../models/productimage.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ProductImageService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(productImage: ProductImage){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'ProductImage/Create',productImage));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'ProductImage/GetListParent'));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'ProductImage/Delete?id=' + id));
    }

    async update(productImage: ProductImage){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'ProductImage/update',productImage));
    }
}
