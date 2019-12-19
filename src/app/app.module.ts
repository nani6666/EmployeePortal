import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule],
  declarations: [ AppComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
