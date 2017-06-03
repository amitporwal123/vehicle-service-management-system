import { Component, OnInit ,Input} from '@angular/core';
import {Request} from '../shared/models/request';

@Component({
  selector: 'app-service-request-list-item',
  templateUrl: './service-request-list-item.component.html',
  styleUrls: ['./service-request-list-item.component.css']
})
export class ServiceRequestListItemComponent implements OnInit {

  constructor() { }
@Input() request:Request;

  ngOnInit() {
  }

}
