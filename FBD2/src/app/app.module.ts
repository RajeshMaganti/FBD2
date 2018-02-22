import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoryitemsComponent } from './admin/categoryitems/categoryitems.component';
import { CategoriesComponent } from './admin/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryitemsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
