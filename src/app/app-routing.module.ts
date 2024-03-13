import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { DeviseComponent } from './devise/devise.component';
import { FartComponent } from './fart/fart.component';

const routes: Routes = [
  { path: 'success', component: SuccessComponent }
  { path: 'devise', component: DeviseComponent }
  { path: 'fart', component: FartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
