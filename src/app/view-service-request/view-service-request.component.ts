import { Component, OnInit } from '@angular/core';
import { Request } from '../shared/models/request';
import { RequestService } from '../shared/services/request.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-view-service-request',
    templateUrl: '../add-service-request/add-service-request.component.html',
    styleUrls:['./view-service-request.component.css']
})
export class ViewServiceRequestComponent implements OnInit {

    constructor(private requestService: RequestService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    //properties
    private requestModel: Request;
    // requestModel:Request=new Request("First Name","Last Name","XX-XX-XX-XXXX",999999999,"Your Complete Address",new Date(1900,1,1),new Date(1900,1,1));

    //life cycle hook

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.requestService.getRequestByID(+params['id']))
            .subscribe(request => {
                // console.log(request);
                this.requestModel = request;
            });
    }

    //methods
    goBack(): void {
        this.location.back();
    }
}