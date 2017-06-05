//Import library Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import Custom Components
import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/components/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ServiceRequestListComponent } from './service-request-list/service-request-list.component';
import { ServiceRequestListItemComponent } from './service-request-list-item/service-request-list-item.component';
import { AddServiceRequestComponent } from './add-service-request/add-service-request.component';
import { ViewServiceRequestComponent } from './view-service-request/view-service-request.component';
//Import custom serivces
import {RequestService} from './shared/services/request.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/services/in-memory-data.service';


//corresponding routing module
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ServiceRequestListComponent,
    HeaderComponent,
    ServiceRequestListItemComponent,
    DashboardComponent,
    AddServiceRequestComponent,
    ViewServiceRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService),
     AppRoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
