import { Component, OnInit } from '@angular/core';
import { ServiceRequestListItemComponent } from '../service-request-list-item/service-request-list-item.component';
import { Request } from '../shared/models/request';
import { RequestService } from '../shared/services/request.service';

@Component({
  selector: 'app-service-request-list',
  templateUrl: './service-request-list.component.html',
})
export class ServiceRequestListComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  requests: Request[];

  ngOnInit() {
    this.requestService.getRequests().then((requests) => {
      this.requests = requests;
    }).catch((err) => {
      console.log("Error occured fetching data. Error Msg:" + err);
    });;
  }

  deleteRequest(request: Request): void {
    this.requestService.delete(request)
      .then(() => {
        this.requests = this.requests.filter((req) => req.id !== request.id);
        
        console.log("Delete id" + request.id);
      });
  }

  undoLastAction(id: number, request?: Request) {
    console.log(`Remove element :${request} from list`)
  }
}
