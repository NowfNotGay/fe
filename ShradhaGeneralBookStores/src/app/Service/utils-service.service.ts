import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  toast$ = new BehaviorSubject<string>(null)
  updateToast(message: string) {
    this.toast$.next(message);
  }
  
  constructor() { }
}
