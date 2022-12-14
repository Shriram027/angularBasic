import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard',
  loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'detail/:id', component:HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
