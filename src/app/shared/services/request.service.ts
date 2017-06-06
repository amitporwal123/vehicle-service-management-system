import { Injectable } from '@angular/core';
import { Request } from '../models/request';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService {

  constructor(private http: Http) { }

  //property
  private requestsUrl = 'api/requests';
  private headers = new Headers({ 'Content-Type': 'application/json' });

private undoRequestObject:Request;
private canUndo:boolean=false;
public isLastActionAdd:boolean;
   
  getRequests(): Promise<Request[]> {
    return this.http.get(this.requestsUrl)
      .toPromise()
      .then(response => response.json().data as Request[])
      .catch(this.handleError);
  }

getRequestByID(id: number): Promise<Request> {
  const url = `${this.requestsUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Request)
    .catch(this.handleError);
}

  postRequest(request: Request): Promise<Request> {
    // console.log(request); // for demo purposes only
    
        return this.http
      .post(this.requestsUrl, JSON.stringify(
        {
          firstName: request.firstName,
          lastName: request.lastName,
          regNo: request.regNo,
          mobileNum: request.mobileNum,
          address: request.address,
          pickUpDate: request.pickUpDate,
          returnDate: request.returnDate
        }
      ), { headers: this.headers })
      .toPromise()
      .then(this.handle)
      .catch(this.handleError);
  }

private handle=(res: any): Promise<Request> =>{
    // console.log(res); // for demo purposes only
    this.canUndo=true;
    this.undoRequestObject=res.json().data as Request;
    this.isLastActionAdd=true;
      return Promise.resolve( res.json().data as Request);
  }

delete(request:Request): Promise<void> {
  const url = `${this.requestsUrl}/${request.id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => {
      this.canUndo=true;
    this.undoRequestObject=request;
    this.isLastActionAdd=false;
    })
    .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


undoinService():Promise<Request>
  {
if(this.isLastActionAdd)
return this.delete(this.undoRequestObject).then(this.handleUndoDelete);
else
return this.postRequest(this.undoRequestObject).then(this.handleUndoAdd);
  }

  private handleUndoDelete=():Promise<Request>=>{
    this.canUndo=false;
    return Promise.resolve(this.undoRequestObject)
  }

  private handleUndoAdd=(request:Request):Promise<Request>=>{
    this.canUndo=false;
    return Promise.resolve(request);
  }
}