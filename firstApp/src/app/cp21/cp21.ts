import { Component,computed,signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cp21',
  styleUrl: './cp21.css',
  templateUrl: './cp21.html',
})
export class Cp21 {
  x=signal(10)
  y=signal(20)
  z=computed(()=>this.x() + this.y());
  showVal(){
    console.log(this.z());
    this.x.set(500)
    console.log(this.z());
  }

  updateX(){
    this.x.set(700);
  }
}
