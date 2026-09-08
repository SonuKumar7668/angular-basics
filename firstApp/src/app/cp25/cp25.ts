import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cp25',
  styleUrl: './cp25.css',
  templateUrl: './cp25.html',
})
export class Cp25 {
  task="";
  count=1;
  taskList:{id:number,task:string}[]=[];

  addTask(){
    this.taskList.push({id:this.count++,task:this.task})
    this.task="";
  }

  deleteTask(taskId:number){
    this.taskList=this.taskList.filter((item)=>item.id!=taskId);
  }
}
