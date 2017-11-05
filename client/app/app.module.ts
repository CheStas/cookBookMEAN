import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './components/recipes/recipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipesItemComponent } from './components/recipes-item/recipes-item.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    PageNotFoundComponent,
    RecipesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [HttpModule],
  providers: [HttpService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
