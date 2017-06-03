import { Component, OnInit } from '@angular/core';
import {ServiceRequestListItemComponent} from '../service-request-list-item/service-request-list-item.component';
import {Request} from '../shared/models/request';
import {RequestService} from '../shared/services/request.service';


const Requests:Request[] = [
        {
      firstName:'Ashish',
    lastName:'Gupta',
    regNo:'DL3CBR5386',
    mobileNum:9999915101,
    address:'36-D,Madan park',
    pickUpDate:new Date(2017,6,18),
    returnDate:new Date(2017,6,20)
},{
      firstName:'Nikita',
    lastName:'Gupta',
    regNo:'DL3CBR5386',
    mobileNum:9999915101,
    address:'36-D,Madan park',
    pickUpDate:new Date(2017,6,18),
    returnDate:new Date(2017,6,20)
},{
      firstName:'Bhavya',
    lastName:'Gupta',
    regNo:'DL3CBR5386',
    mobileNum:9999915101,
    address:'36-D,Madan park',
    pickUpDate:new Date(2017,6,18),
    returnDate:new Date(2017,6,20)
},{
      firstName:'Sunita',
    lastName:'Gupta',
    regNo:'DL3CBR5386',
    mobileNum:9999915101,
    address:'36-D,Madan park',
    pickUpDate:new Date(2017,6,18),
    returnDate:new Date(2017,6,20)
}
    ]
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
