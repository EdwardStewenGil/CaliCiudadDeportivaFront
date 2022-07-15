import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'evento', component: EventComponent,},
  { path: 'admin', component: AdminComponent,},
  { path: 'login', component: LoginComponent,},
  { path: '**', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
