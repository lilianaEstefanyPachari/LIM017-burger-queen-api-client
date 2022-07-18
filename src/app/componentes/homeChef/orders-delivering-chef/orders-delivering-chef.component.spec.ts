import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDeliveringChefComponent } from './orders-delivering-chef.component';

describe('OrdersDeliveringChefComponent', () => {
  let component: OrdersDeliveringChefComponent;
  let fixture: ComponentFixture<OrdersDeliveringChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDeliveringChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersDeliveringChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
