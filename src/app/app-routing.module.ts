import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TrabajosComponent } from './views/trabajos/trabajos.component';

const app_routs:Routes=[
    {path:'home', component: HomeComponent},
    {path:'trabajos', component: TrabajosComponent},
    {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(app_routs,{useHash:true})
    ],
    exports:[
        RouterModule
    ]
    
})
export class AppRoutingModule{}