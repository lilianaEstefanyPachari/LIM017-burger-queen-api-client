import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MainCartService } from 'src/app/services/main-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppCartService } from 'src/app/services/shopp-cart.service';
import { of, throwError } from 'rxjs';
import {MatCardModule} from '@angular/material/card';

import { BreakfastComponent } from './breakfast.component';

describe('BreakfastComponent', () => {
  let component: BreakfastComponent;
  let fixture: ComponentFixture<BreakfastComponent>;
  let httpTestingController: HttpTestingController;

  //spy del servicio
  //let productService: jasmine.SpyObj<ProductsService>;
  // let shoppCartService: jasmine.SpyObj<ShoppCartService>;
  // let mainCartService: jasmine.SpyObj<MainCartService>;

  beforeEach(async () => {
    //spy del método que usaremos del servicio
   const  productsServiceMock = {
    getProductsMethod: jasmine.createSpy('getProductsMethod').and.callFake(():any => {
      return of(
          [
            {
              id: 1,
              name: "Sandwich de jamón y queso",
              price: 10,
              image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
              type: "Almuerzo",
              dateEntry: "2022-03-05 15:14:10"
            },
            {
              id: 2,
              name: "Café americano",
              price: 5,
              image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
              type: "Desayuno",
              dateEntry: "2022-03-05 15:14:10"
            },
          ]
        )
    })

   }

   const  shoppCartServiceMock = {
    openSideBareService: jasmine.createSpy('openSideBareService').and.callFake(():any => {
      console.log("ESJECUTO este SPY")
      return of( true )
    })

   }
    // productService = jasmine.createSpyObj<ProductsService>('ProductsService', ['getProductsMethod']);

    // productService.getProductsMethod.and.callFake(():any => {
    //   console.log("ESJECUTO este SPY")
    // })
    await TestBed.configureTestingModule({
      declarations: [ BreakfastComponent ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        MatCardModule
      ],
      providers: [
        ToastrService,
        { provide: ProductsService, useValue: productsServiceMock },
        { provide: ShoppCartService, useValue: shoppCartServiceMock }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllProducts should return an array of producst objects', () => {
    expect(component.productsBreakfast.length).toBe(1);
  });

  it('getAllProducts should return an array of filter producst objects', () => {
    const rpta = [
      {
      id: 2,
      name: "Café americano",
      price: 5,
      image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
      type: "Desayuno",
      dateEntry: "2022-03-05 15:14:10",
      quantity:1,
      total:5
    },]
    expect(component.productsBreakfast).toEqual(rpta);
  });

  it('addToCart to have been called', () => {
    const spyOfMethod = spyOn(component,'addToCart');
    const compiled = fixture.nativeElement;
    const btnAddProducts = compiled.querySelector('.addProducts');
    btnAddProducts.click();
    expect(spyOfMethod).toHaveBeenCalled();
  });


});

