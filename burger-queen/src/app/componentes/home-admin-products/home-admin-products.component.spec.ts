import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminProductsComponent } from './home-admin-products.component';

describe('HomeAdminProductsComponent', () => {
  let component: HomeAdminProductsComponent;
  let fixture: ComponentFixture<HomeAdminProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
