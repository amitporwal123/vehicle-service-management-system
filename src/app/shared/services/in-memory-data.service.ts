import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Request} from '../models/request';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let requests:Request[] = [
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
    ];
    return {requests};
  }
}
