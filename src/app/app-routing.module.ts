import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { DeviseComponent } from './devise/devise.component';
import { FartComponent } from './fart/fart.component';

const routes: Routes = [
  { path: 'success', component: ErrorComponent },
  { path: 'devise', component: DeviseComponent },
  { path: 'fart', component: FartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
