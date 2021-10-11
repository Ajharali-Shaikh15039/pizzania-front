import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { SliderComponent } from './pizza/slider/slider.component';

const routes: Routes = [
{path:'', component:SliderComponent},
{path:"pizza-details",component:PizzaListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
