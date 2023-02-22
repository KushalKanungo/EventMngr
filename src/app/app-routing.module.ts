import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestPageComponent } from './contest-page/contest-page.component';
import { ContestComponent } from './contest/contest.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'contests',
    component: ContestPageComponent,
  },
  {
    path: 'contest',
    component: ContestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
