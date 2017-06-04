import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServiceRequestListComponent } from './service-request-list/service-request-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './shared/components/header.component';
import { ServiceRequestListItemComponent } from './service-request-list-item/service-request-list-item.component';

import {RequestService} from './shared/services/request.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/services/in-memory-data.service';
import { ViewServiceRequestComponent } from './view-service-request/view-service-request.component';



@NgModule({
  declarations: [
    AppComponent,
    ServiceRequestListComponent,
    HeaderComponent,
    ServiceRequestListItemComponent,
    DashboardComponent,
    ViewServiceRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
