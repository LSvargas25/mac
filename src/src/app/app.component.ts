
import { Component } from '@angular/core';
import { HeaderComponent } from "./header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent]
})
export class AppComponent {}
