import {Injectable} from '@angular/core';
import {Request} from '../models/request';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService{

    constructor (private http:Http){}

//property
private requestsUrl = 'api/requests';

getRequests(): Promise<Request[]> {
    return this.http.get(this.requestsUrl)
               .toPromise()
               .then(response => response.json().data as Request[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}