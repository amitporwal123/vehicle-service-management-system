import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Request} from '../shared/models/request';
import { RequestService } from '../shared/services/request.service';
@Component({
  selector: 'app-service-request-list-item',
  templateUrl: './service-request-list-item.component.html',
  })
export class ServiceRequestListItemComponent implements OnInit {

  constructor(private requestService: RequestService) { }
@Input() request:Request;

  ngOnInit() {
  }


@Output() delete: EventEmitter<Request> = new EventEmitter();
 
 onDeletePress(request:Request){
   this.delete.emit(request);
 }


}
