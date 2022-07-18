import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Direction } from '@angular/cdk/bidi';
import { MainCartService } from 'src/app/services/main-cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatIconModule} from '@angular/material/icon';




import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        MatIconModule
      ],
      providers: [ ToastrService, MainCartService, OrdersService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //test unitario de metodos
  it('should add the total for each product, calcGranTotal(products:ProductCart[])', () => {
    const mockedData = [
      {
      id: 1,
      image: "fakeURL",
      name: "lili",
      price: 10,
      type: "desayuno",
      quantity:3,
      total: 30
    },
    {
      id: 2,
      image: "fakeURL2",
      name: "estef",
      price: 5,
      type: "desayuno",
      quantity:2,
      total: 10
    }];

    const expectedResult = 40;
    const result = component.calcGranTotal(mockedData)

    expect(result).toEqual(expectedResult);
  });
});
