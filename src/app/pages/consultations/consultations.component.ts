import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';
import { consultation } from '../../models/consultation';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'consultations',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './consultations.component.html',
  styleUrl: './consultations.component.css'
})
export class ConsultationsComponent {
constructor(private consultationService : ConsultationService){}
  consultations : consultation [] = []

  getConsultations(){
    this.consultationService.getConsultation().subscribe({
      next:(res:any) =>{
        
        console.log(res)
        this.consultations = res
      },
      error: (res:any) =>{
        console.log("ERROR")
      }
    })
  }
}
