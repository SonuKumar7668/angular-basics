import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cp20',
  styleUrl: './cp20.css',
  templateUrl: './cp20.html',
})
export class Cp20 {
  data: WritableSignal<string|number> =signal<number | string>(0);
  handleSet(){
    this.data.set("yo");
  }
}
