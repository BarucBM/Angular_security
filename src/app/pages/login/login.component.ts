import { Component, inject, NgModule } from '@angular/core';
import { Login } from '../../models/login';
import {FormsModule} from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login = {
    login: "",
    password: ""
  }

  constructor(private authService:AuthService, private router: Router){}

  onLogin(){
    this.authService.login(this.login).subscribe({
      next: (res:any)=> {
          localStorage.setItem("token", res.token)
          alert("Login Funcionou")
          this.router.navigateByUrl('home')  
      },

      error: (res:any) => alert("Senha ou usuário inválidos")

    })
  }

}
