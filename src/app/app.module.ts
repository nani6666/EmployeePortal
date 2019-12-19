import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeTableListComponent } from './employee-table-list/employee-table-list.component';
const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: EmployeeTableListComponent },
  { path: 'tableList', component: EmployeeTableListComponent }]
@NgModule({
  imports:      [
                 BrowserModule, 
                 FormsModule , 
                 ReactiveFormsModule,
                 RouterModule.forRoot( appRoutes, {enableTracing: true })
                 ],
  declarations: [ AppComponent, RegisterComponent, EmployeeTableListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
