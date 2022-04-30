import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetamaskComponent } from './metamask/metamask.component';

const routes: Routes = [
  { path:'', component: MetamaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
