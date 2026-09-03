import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cp15',
  styleUrl: './cp15.css',
  templateUrl: './cp15.html',
})
export class Cp15 {
  display = true;
  hide() {
    this.display = !this.display;
  }
}
