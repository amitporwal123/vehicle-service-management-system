import { Component, OnInit } from '@angular/core';
import {Request} from '../shared/models/request';
import {RequestService} from '../shared/services/request.service';
@Component({
  selector: 'app-view-service-request',
  templateUrl: './view-service-request.component.html',
  styleUrls: ['./view-service-request.component.css']  
})
export class ViewServiceRequestComponent implements OnInit {

   constructor(private requestService:RequestService,
  
    ) { }

  requestModel:Request=new Request("First Name","Last Name","XX-XX-XX-XXXX",999999999,"Your Complete Address",new Date(1900,1,1),new Date(1900,1,1));

  ngOnInit() {

// this.requestModel=new Request('','','',+91,'',new Date(2017,6,18),new Date(2017,6,20))
  }
goBack(): void {
 console.log("Posted");
}

onSubmit():void{
  this.requestService.postRequest(this.requestModel).then(() => this.goBack()).catch((err)=>{
      console.log("Error occured fetching data. Error Msg:"+err);
  });;
}

}


