import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

const routes: Routes = [
  { path:"list" , component:ListComponent },
  { path:"create", component:CreateComponent},
  { path:"profile", component:ProfileComponent},
  { path:"update", component:UpdateComponent}
];

@NgModule({
  declarations: [CreateComponent,ListComponent,ProfileComponent,UpdateComponent],
  imports: [
    FormsModule,ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule.forChild(routes)
  ],
  providers:[UserService],
  exports: [RouterModule]
})
export class UserModule { }
