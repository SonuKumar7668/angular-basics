import { Component, signal } from '@angular/core';
import { Cp20 } from './cp20/cp20';
import { Cp21 } from './cp21/cp21';
import { Cp22 } from './cp22/cp22';
import { Cp23 } from './cp23/cp23';
import { Cp24 } from './cp24/cp24';
import { Cp25 } from './cp25/cp25';
import { Cp26 } from './cp26/cp26';
import { Cp28 } from './cp28/cp28';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = [{
    name: 'sonu',
    id: 1,
    age: 22
  },
  {
    name: "satyam",
    id: 2,
    age: 23
  },
  {
    name: "anmol",
    id: 3,
    age: 21
  },
  {
    name: "harshit",
    id: 4,
    age: 21
  }
  ]
  constructor(private router: Router) { }
  gotoProfile() {
    this.router.navigate(["profile"], { queryParams: { name: 'sonu' } })
  }

}