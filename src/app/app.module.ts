import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChestComponent } from './chest/chest.component';
import { SuccessComponent } from './success/success.component';
import { DeviseComponent } from './devise/devise.component';
import { FartComponent } from './fart/fart.component';

@NgModule({
  declarations: [				
    AppComponent,
      ChestComponent,
      SuccessComponent,
      DeviseComponent,
      FartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
