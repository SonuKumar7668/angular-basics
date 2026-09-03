import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-cp16',
  styleUrl: './cp16.css',
  templateUrl: './cp16.html',
})
export class Cp16 {
  color=1;
  changeColor(n:number){
    this.color=n;
  }

  handleInput(event:Event){
    this.color=parseInt((event.target as HTMLInputElement).value);
  }
}
