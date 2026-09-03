import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
import { Profile } from './profile/profile';
import { Til15 } from './til15/til15';
import { Cp16 } from './cp16/cp16';
import { Cp15 } from './cp15/cp15';
import { Cp17 } from './cp17/cp17';
import { Cp18 } from './cp18/cp18';

@Component({
  imports: [Cp18],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  
}
