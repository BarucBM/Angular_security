import { Component, OnInit } from '@angular/core';
import { ConsultationsComponent } from '../consultations/consultations.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [ConsultationsComponent, RouterOutlet ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{


}
