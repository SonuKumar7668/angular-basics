import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, NgIf, NgStyle],
  selector: 'app-forms',
  styleUrl: './forms.css',
  templateUrl: './forms.html',
})
export class Forms {
  // name=new FormControl();
  // passowrd=new FormControl();

  // handleSubmit(){
  //   console.log(this.name.value);
  // }
  // updateValue(){
  //   this.name.setValue("sonu");
  //   this.passowrd.setValue("2323")
  // }

  profileForm= new FormGroup({
    user: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl()
  })

  onSubmit(){
    // console.log(this.profileForm.name.value);
    console.log("on submit called");
    console.log(this.profileForm.value);
  }

  get user(){
    return this.profileForm.get("user");
  }

  get password(){
    return this.profileForm.get("password");
  }

  get email(){
    return this.profileForm.get("email");
  }
}
