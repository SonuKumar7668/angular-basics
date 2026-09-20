import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Til15 } from './til15/til15';
import { PageNotFound } from './page-not-found/page-not-found';
import { User } from './user/user';
import { Forms } from './forms/forms';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Pipes } from './pipes/pipes';

export const routes: Routes = [
    {path:"login",component:Login},
    {path:"profile",component:Profile},
    {path:"til15",component:Til15},
    {path:"forms",component:Forms},
    {path:"rf",component:ReactiveForms},
    {path:"pipe",component:Pipes},
    {path:"user/:id/:user",component:User},
    {path:"**",component:PageNotFound}
];
