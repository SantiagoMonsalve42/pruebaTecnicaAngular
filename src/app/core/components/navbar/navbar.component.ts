import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToProfile(caso:number) {
    switch(caso) {
      case 1:
        this.router.navigate(['/core/profile']);
        break;
      case 2:     
        this.router.navigate(['/core/subjects']);
        break;
      case 3:     
        this.router.navigate(['/core/info']);
        break;
      case 4:     
        sessionStorage.clear();
        this.router.navigate(['/session/login']);
        break;
      default:
        console.log("No se ha encontrado la ruta");
        break;
    }
  }
}
