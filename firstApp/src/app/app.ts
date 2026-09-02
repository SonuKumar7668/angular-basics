import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
import { Profile } from './profile/profile';

@Component({
  imports: [Login,SigninComponent,Profile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  // Get and set name

  name="";
  displayName="";
  email="";
  getName(event:Event){
    this.name=(event.target as HTMLInputElement).value;
  }
  showName(event:Event){
    this.displayName=this.name;
  }

  setName(event:Event){
    this.name="Sonu";
  }

  showEmail(value:string){
    this.email=value
  }


  // protected readonly title = signal('firstApp');
  // name="Sonu kumar"
  isAdmin=false
  // count=50;
  price=9.99;
  isLogin=true;
  title=signal("String sent as signal");
  count=0;

  handle_click(){
    console.log("function called");
  }

  increase(){
    this.count=this.count+1;
  }

  decrease(){
    this.count=this.count-1;
  }

  reset(){
    this.count=0;
  }

  handleCounter(val:String){
    if(val=="plus"){
      this.count=this.count+1;
    }else if(val == "minus" && this.count>0){
      this.count=this.count-1;
    }else {
      this.count=0;
    }
  }

  handleEvent(event:Event){
    console.log("Event called",event.type);
    console.log("Value",(event.target as HTMLInputElement).value)
  }
}
