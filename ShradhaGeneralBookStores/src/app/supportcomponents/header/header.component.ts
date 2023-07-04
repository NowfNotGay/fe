import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    }

    change(){
      const body = document.querySelector('body');
      body.classList.toggle('toggle-sidebar');
    }

    logout(){
      sessionStorage.clear();
      localStorage.clear();
      this.router.navigate(['login']);
    }
}
