import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path:"signin" , component:LoginComponent },
  { path:"signup", component:RegisterComponent}
];

@NgModule({
  declarations: [
    LoginComponent, RegisterComponent
  ],
  imports: [
    FormsModule, HttpClientModule, CommonModule, RouterModule.forChild(routes)
  ],
  providers:[AuthService],
  exports: [RouterModule]
})
export class AuthModule { }
