import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesModule } from './categories/categories.module';
import { HomeComponent } from './home/home.component';
import { ItemsModule } from './items/items.module';
import { ListsModule } from './lists/lists.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoriesModule,
    HttpClientModule,
    ItemsModule,
    ListsModule,
    FormModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
