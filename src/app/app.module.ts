import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServiceRequestListComponent } from './service-request-list/service-request-list.component';

import {HeaderComponent} from './header.component';
import { ServiceRequestListItemComponent } from './service-request-list-item/service-request-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceRequestListComponent,
    HeaderComponent,
    ServiceRequestListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
