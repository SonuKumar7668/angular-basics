import { Component } from '@angular/core';
import { Cmp1 } from '../components/cmp1/cmp1';
import { Cmp2 } from '../components/cmp2/cmp2';

@Component({
  imports: [Cmp1,Cmp2],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  title="Login Page";
}
