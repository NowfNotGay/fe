import { Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { UtilsServiceService } from "src/app/Service/utils-service.service";

@Component({
    selector: 'app-root',
    templateUrl: './homeAdmin.component.html'
})
export class HomeAdminComponent implements OnInit{

  constructor(utils: UtilsServiceService, private router: Router) {
    utils.toast$.subscribe(message => {
      if(message != null)
      setTimeout(() => {
        window.alert(message);
      }, 200)
    })
  }

    ngOnInit(): void {
if(localStorage.getItem('email') != null && sessionStorage.getItem('email') == null){
        sessionStorage.setItem('email',localStorage.getItem('email'));
      }

      console.log(sessionStorage.getItem('email'));
        if(sessionStorage.getItem('email') == null) {
            this.router.navigate(['login']);
        }
    }
}
