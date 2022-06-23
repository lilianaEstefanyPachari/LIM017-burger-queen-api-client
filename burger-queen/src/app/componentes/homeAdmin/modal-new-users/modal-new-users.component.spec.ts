import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewUsersComponent } from './modal-new-users.component';

describe('ModalNewUsersComponent', () => {
  let component: ModalNewUsersComponent;
  let fixture: ComponentFixture<ModalNewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
