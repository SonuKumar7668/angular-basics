import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reactive-forms',
  styleUrl: './reactive-forms.css',
  templateUrl: './reactive-forms.html',
})
export class ReactiveForms {
  userDetail:any={}
  addDetail(val:NgForm){
    console.log(val);
    this.userDetail=val;
  }
}
