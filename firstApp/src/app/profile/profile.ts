import {Component} from "@angular/core"
import { ActivatedRoute } from "@angular/router";
import { Child } from "../child/child";
@Component({
    selector:"app-profile",
    // template:`<h2>Profile component </h2>`
    templateUrl:"./profile.html",
    imports:[Child],
    styleUrl:"./profile.css"
})

export class Profile{
    userName:string="";
    users:string='sonu';
    constructor(private route:ActivatedRoute){}

    getUsers(val:String[]){
        console.log(val);
    }

    ngOnInit(){
        // this.userName=this.route.snapshot.paramMap.get("name");
        // console.log(this.userName);

        this.route.queryParams.subscribe(params=>this.userName=params['name']);
    }
}