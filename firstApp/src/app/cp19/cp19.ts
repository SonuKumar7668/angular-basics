import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cp19',
  styleUrl: './cp19.css',
  templateUrl: './cp19.html',
})
export class Cp19 {
  count=signal(0);
  constructor(){
    effect(()=>{
      console.log(this.count());
    })
  }
}
