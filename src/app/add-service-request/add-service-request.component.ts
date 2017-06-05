import { Component, OnInit } from '@angular/core';
import { Request } from '../shared/models/request';
import { RequestService } from '../shared/services/request.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-service-request',
  templateUrl: './add-service-request.component.html',
 })
export class AddServiceRequestComponent implements OnInit {

  constructor(private requestService: RequestService,private location: Location) { }

  //properties
  private requestModel: Request;
  // requestModel:Request=new Request("First Name","Last Name","XX-XX-XX-XXXX",999999999,"Your Complete Address",new Date(1900,1,1),new Date(1900,1,1));


  //life cycle hook
  ngOnInit() {
  }

  //methods
  //methods
    goBack(): void {
        this.location.back();
    }

  onSubmitForm(form: NgForm) {
    // console.log(form.value);
    // console.log(form.value.pickUpDate);
    this.requestModel=new Request(0,form.value.firstName,form.value.lastName,form.value.regNo,form.value.mobileNum,form.value.address,new Date(form.value.pickUpDate),new Date(form.value.returnDate));
    // console.log(this.requestModel);
     this.requestService.postRequest(this.requestModel).then(() => this.goBack()).catch((err)=>{
        console.log("Error occured fetching data. Error Msg:"+err);
    });
  }

  // onSubmit():void{
  //   this.requestService.postRequest(this.requestModel).then(() => this.goBack()).catch((err)=>{
  //       console.log("Error occured fetching data. Error Msg:"+err);
  //   });
  // }

}


