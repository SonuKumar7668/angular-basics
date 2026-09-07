import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cp22',
  styleUrl: './cp22.css',
  templateUrl: './cp22.html',
})
export class Cp22 {
  name=signal("sonu");
  headingDisplay=false;
  count=0

  constructor(){
    effect(()=>{
      console.log(this.name());
    })
  }

  updateUsername(){
    this.name.set("kumar")
  }

  toggleValue(){
    this.headingDisplay=!this.headingDisplay;
  }
}
