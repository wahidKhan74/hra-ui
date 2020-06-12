import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  { path:"" , component:HomeComponent },
  { path:"auth" , loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule)},
  { path:"user" , loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
