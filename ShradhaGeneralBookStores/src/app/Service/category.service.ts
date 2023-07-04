import { Category } from '../models/category.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class CategoryService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(category: Category){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Category/Create',category));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Category/GetListParent'));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Category/Delete?id=' + id));
    }

    async update(category: Category){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Category/update',category));
    }

    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Category/get?id=' + id));
  }

  async readnextid(id: number){
    return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Category/GetAllCategoryByLevelOnlyId?id=' + id));
}
}
