import {Component} from "@angular/core";

@Component({
    selector:"app-signin",
    template:`<h2>{{title}}</h2>`,
    styles:[`
        h2{
            color:blue
        }`]
})

export class SigninComponent{
    title="Signin page";
}