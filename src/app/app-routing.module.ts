import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import { AddServiceRequestComponent } from './add-service-request/add-service-request.component';
import { ViewServiceRequestComponent } from './view-service-request/view-service-request.component';
const routes:Routes=[
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'',
      redirectTo:'/dashboard',
      pathMatch:'full'
    },
    {
      path:'view/:id',
      component:ViewServiceRequestComponent
    },
    {
        path:'add',
        component:AddServiceRequestComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}