import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  users=['amit','anil','kunal','sam'];
  @Input() user:string="";
  @Output() getUsers=new EventEmitter();

  ngOnInit(){
    this.getUsers.emit(this.users);
  }
}
