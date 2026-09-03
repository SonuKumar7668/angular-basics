import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cp17',
  styleUrl: './cp17.css',
  templateUrl: './cp17.html',
})
export class Cp17 {
  color="red";

  changeColor(color:string){
    
    this.color=color;
    console.log(this.color);
  }
}
