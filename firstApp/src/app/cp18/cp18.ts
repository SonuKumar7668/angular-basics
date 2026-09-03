import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cp18',
  styleUrl: './cp18.css',
  templateUrl: './cp18.html',
})
export class Cp18 {
  users=['anil','sonu','peter','tony','steve']
  students=[
    {name:"sonu",age:22,email:"sonu@gmail.com"},
    {name:"tony",age:32,email:"tony@gmail.com"},
    {name:"bruce",age:41,email:"bruce@gmail.com"},
    {name:"bruce",age:41,email:"bruce@gmail.com"},
  ]
}
