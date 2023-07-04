import { Author } from '../models/author.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AuthorService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(author: Author){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Author/Create',author));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Author/Read'));
    }

    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Author/get?id=' + id));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Author/Delete?id=' + id));
    }

    async update(author: Author){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Author/update',author));
    }
}
