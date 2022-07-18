import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDeliveringComponent } from './orders-delivering.component';

describe('OrdersDeliveringComponent', () => {
  let component: OrdersDeliveringComponent;
  let fixture: ComponentFixture<OrdersDeliveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDeliveringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersDeliveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
