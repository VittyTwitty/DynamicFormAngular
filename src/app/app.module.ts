import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from "@angular/router";
import { ROUTES } from "./app.routing";
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicItemsComponent } from './dynamic-items/dynamic-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicFormComponent,
    DynamicItemsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
