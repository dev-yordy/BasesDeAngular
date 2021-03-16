import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContacComponent } from './Pages/contac/contac.component';


const routes: Routes = [
 {path:'home', component: HomeComponent},
 {path:'about', component: AboutComponent},
 {path:'posts',
  loadChildren: () =>import('./Pages/posts/posts.module').then((m)=> m.PostsModule) 
 },
 {path:'contact', component: ContacComponent},
 {path:'**', redirectTo: 'home'}  //Esto lo que hace es cuando el usuario ponga una ruta que no existe, se le redirigira al home
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
