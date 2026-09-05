import { Component, signal } from '@angular/core';
import { Cp20 } from './cp20/cp20';
import { Cp21 } from './cp21/cp21';

@Component({
  imports: [Cp21],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  
}
