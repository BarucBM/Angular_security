import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  {
  constructor(private authService:AuthService, private router: Router){}
 


onLogout(){
    this.authService.logout()
        alert("Logout succesfull")
        this.router.navigateByUrl("/")
      
    }
  }


