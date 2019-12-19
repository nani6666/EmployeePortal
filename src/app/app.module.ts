import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { RegisterComponent } from './register/register.component';
import { EmployeeTableListComponent } from './employee-table-list/employee-table-list.component';
import { EmployeesDatalistService } from './employees-datalist.service';
import {MaterialModule} from './material/material.module';

const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tableList', component: EmployeeTableListComponent }
  ];

@NgModule({
  imports:      [
                 BrowserModule, 
                 FormsModule ,
                 BrowserAnimationsModule, 
                 BsDatepickerModule.forRoot(),
                 MaterialModule,
                 ReactiveFormsModule,
                 RouterModule.forRoot( appRoutes, {enableTracing: true })
                 ],
  declarations: [ AppComponent, RegisterComponent, EmployeeTableListComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
