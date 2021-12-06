import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  items: MenuItem[]=[];

  displayMenu:boolean = false;

  constructor(private authServ:AuthService,private router:Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fas fa-home',
        routerLink:['/']
      },
      {
          label: 'Cars',
          icon: 'fas fa-car',
          routerLink:['/cars']
      },
      {
          label: 'Servicios',
          icon: 'fas fa-tasks',
          routerLink:['/servicios']
      },
      {
          label: 'Users',
          icon: 'fas fa-user',
          routerLink:['/users']
      },
      {
          label: 'Agendamientos',
          icon: 'far fa-calendar-alt',
          routerLink:['/agendamientos']
      },
  ];
  }

  isLogged(){
    return this.authServ.userLogged();
  }

  salir(){
    this.displayMenu=false;
    this.authServ.logout();
  }

}