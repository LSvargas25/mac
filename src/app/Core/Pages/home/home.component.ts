import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // <- importante
  imports: [CommonModule], // <- aquí se incluye CommonModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    {
      image: 'assets/GYMSHARKLOGO.png',
      alt: 'Gymshark',
      overlayText: 'GYMSHARK',
      extraImage: 'assets/SharkLogo.png'
    },
    {
      image: 'assets/YOUNGLA.png',
      alt: 'YoungLA',
      overlayText: 'YOUNGLA',
      extraImage: 'assets/YOUNGLALOGO.png'
    },
    {
      image: 'assets/macarenalogolargo.png',
      alt: 'LAMACARENA',
      overlayText: 'LAMACARENA',
      extraImage: 'assets/MAC.png'
    }
  ];

  constructor(private router: Router) {}

  onSlideClick(item: any) {
    console.log('Clic en slide:', item);
    // Si quieres navegar internamente, puedes usar:
    // this.router.navigate(['/ruta']);
  }
}
