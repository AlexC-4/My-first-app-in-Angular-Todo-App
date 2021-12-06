import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingWrapperComponent } from './routing-wrapper.component';

describe('RoutingWrapperComponent', () => {
  let component: RoutingWrapperComponent;
  let fixture: ComponentFixture<RoutingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
