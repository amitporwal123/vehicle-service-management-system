import { Component, OnInit } from '@angular/core';
import {ServiceRequestListItemComponent} from '../service-request-list-item/service-request-list-item.component';
import {Request} from '../shared/models/request';
import {RequestService} from '../shared/services/request.service';



@Component({
  selector: 'app-service-request-list',
  templateUrl: './service-request-list.component.html',
  styleUrls: ['./service-request-list.component.css']
})
export class ServiceRequestListComponent implements OnInit {

  constructor(private requestService:RequestService) { }

   requests:Request[];

  ngOnInit() {
    // this.requests=Requests;
    this.requestService.getRequests().then((requests)=>{
      this.requests=requests;
    }).catch((err)=>{
      console.log("Error occured fetching data. Error Msg:"+err);
  });;
  }

}
