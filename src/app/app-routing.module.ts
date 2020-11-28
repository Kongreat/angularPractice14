import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CarsComponent} from './cars/cars.component';
import {CarDetailComponent} from './car-detail/car-detail.component';

const routes: Routes = [
  { path: 'carDetail/:id', component: CarDetailComponent},
  {path: '', component: HomeComponent},
  {path: 'cars', component: CarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routerComponents = [
  HomeComponent,
  CarsComponent,
  CarDetailComponent
];
