import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  name:string| null='';
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
      console.log(params);
      this.name=params['user'];
    })
  }
}
