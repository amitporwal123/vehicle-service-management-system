import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestListItemComponent } from './service-request-list-item.component';

describe('ServiceRequestListItemComponent', () => {
  let component: ServiceRequestListItemComponent;
  let fixture: ComponentFixture<ServiceRequestListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRequestListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
