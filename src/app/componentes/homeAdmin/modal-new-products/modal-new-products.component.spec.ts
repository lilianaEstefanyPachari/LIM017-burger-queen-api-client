import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewProductsComponent } from './modal-new-products.component';

describe('ModalNewProductsComponent', () => {
  let component: ModalNewProductsComponent;
  let fixture: ComponentFixture<ModalNewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
