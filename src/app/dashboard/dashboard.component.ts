import {Component,ViewChild} from '@angular/core';
import {ServiceRequestListComponent} from '../service-request-list/service-request-list.component';
import { RequestService } from '../shared/services/request.service';
@Component({
    selector:'dashboard',
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent{

constructor(private requestService: RequestService){}


    @ViewChild(ServiceRequestListComponent)
    child:ServiceRequestListComponent;
  undo():any{
    // child is set

this.requestService.undoinService().then((request)=>
this.child.undoLastAction(request));
    
  }
}

// @Component({
//   selector: 'child-cmp',
//   template: '<p>child</p>'
// })
// class ChildCmp {
//   doSomething() {}
// }
// @Component({
//   selector: 'some-cmp',
//   template: '<child-cmp></child-cmp>',
//   directives: [ChildCmp]
// })
// class SomeCmp {
//   @ViewChild(ChildCmp) child:ChildCmp;
//   ngAfterViewInit() {
//     // child is set
//     this.child.doSomething();
//   }
// }