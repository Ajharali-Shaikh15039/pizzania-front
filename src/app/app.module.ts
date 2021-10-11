import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaDetailsComponent } from './pizza/pizza-details/pizza-details.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { HeaderComponent } from './pizza/header/header.component';
import { FooterComponent } from './pizza/footer/footer.component';
import { SliderComponent } from './pizza/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaDetailsComponent,
    PizzaListComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
