import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    alt: 'Gymshark'
  },
  {
    image: 'assets/YOUNGLA.png',
    alt: 'YoungLA'
  },
  {
    image: 'assets/macarenalogolargo.png',
    alt: 'Macarena Design',

  }
];

}
