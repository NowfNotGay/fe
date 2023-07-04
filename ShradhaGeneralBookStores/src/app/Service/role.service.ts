import { Role } from '../models/role.model';
import { BaseURLService } from './BaseURL.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class RoleService {
    constructor(
        private baseUrlservice: BaseURLService,
        private httpclient: HttpClient
    ){}

    async create(role: Role){
      return await lastValueFrom(this.httpclient.post(this.baseUrlservice.baseUrl() + 'Role/Create',role));
    }

    async read(){
        return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Role/Read'));
    }

    async get(id: number){
      return await lastValueFrom(this.httpclient.get(this.baseUrlservice.baseUrl() + 'Role/get?id=' + id));
    }

    async delete(id: number){
        return await lastValueFrom(this.httpclient.delete(this.baseUrlservice.baseUrl() + 'Role/Delete?id=' + id));
    }

    async update(role: Role){
      return await lastValueFrom(this.httpclient.put(this.baseUrlservice.baseUrl() + 'Role/update',role));
    }
}
