import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  textList: string[] = [
    "Train. Inspire. Repeat.",
    "Strength starts with mindset.",
    "Move with purpose. Live with power.",
    "Unleash your potential.",
    "Empower your journey.",
    "Strength is a lifestyle.",
    "Train hard, live strong.",
    "Strength is the foundation of success.",
    "Empower your body, empower your mind.",
    "Strength is not just physical, it’s mental too."
  ];

  displayedText: string = '';
  typedHTML: string = '';
  currentTextIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

ngOnInit(): void {
  if (this.isBrowser) {
    this.safeTypeEffect();
  }
}

  safeTypeEffect(): void {
    const currentText = this.textList[this.currentTextIndex];

    if (this.isDeleting) {
      this.displayedText = currentText.substring(0, this.charIndex--);
    } else {
      this.displayedText = currentText.substring(0, this.charIndex++);
    }

    this.typedHTML = `${this.displayedText}<span class="cursor"></span>`;

    let delay = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.textList.length;
      delay = 500;
    }

    setTimeout(() => {
      if (this.isBrowser) {
        this.safeTypeEffect();
      }
    }, delay);
  }

  onSlideClick(item: any) {
    console.log('Clic en slide:', item);
  }
}
