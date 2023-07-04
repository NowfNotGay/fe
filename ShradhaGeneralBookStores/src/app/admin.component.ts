import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit{

    constructor(
        private router: Router
    ){}
    ngOnInit(): void {
      if(localStorage.getItem('email') != null){
        sessionStorage.setItem('email',localStorage.getItem('email'));
      }
      
      console.log(sessionStorage.getItem('email'));
        if(sessionStorage.getItem('email') == null) {
            this.router.navigate(['login']);
        }
    }
}
