import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "./Core/Components/logo/logo.component";
import { NavbarComponent } from "./Core/navbar/navbar.component";
import { HomeComponent } from "./Core/Pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ← también arregla el nombre de esta propiedad (es **styleUrls**, no styleUrl)
})
export class AppComponent {
  title = 'mac';
}
