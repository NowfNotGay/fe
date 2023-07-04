import { Injectable } from "@angular/core";
@Injectable()
export class BaseURLService {
    baseUrl(): string {
        return 'https://localhost:7270/api/'
    }
}
