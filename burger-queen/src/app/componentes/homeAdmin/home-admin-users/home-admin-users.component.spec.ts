import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {OverlayModule} from '@angular/cdk/overlay';

import { HomeAdminUsersComponent } from './home-admin-users.component';

describe('HomeAdminUsersComponent', () => {
  let component: HomeAdminUsersComponent;
  let fixture: ComponentFixture<HomeAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminUsersComponent ],
      imports:[
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        OverlayModule,
        MatDialogModule,
      ],
      providers:[
        UsersService,
        // MatDialog,
        ToastrService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as users []', () => {
    expect(component.users).toEqual([]);
  });


  it('should render message with value "algo"', () => {
    const compiled  = fixture.nativeElement;
    expect(compiled.querySelector('.optionAddUsers p').textContent).toBe('Crear Usuario')
  });

  it('openDialog to have been called', () => {
//spyOn(someObj, 'func').and.returnValue(42);
//let spy = spyOn<MyComponent, any>(component,'close')

    //const spy = spyOn<HomeAdminUsersComponent, any>(component,'openDialog')
    const spy = spyOn(component,'openDialog');

    const compiled  = fixture.nativeElement;
    const btn = compiled.querySelector('.optionAddUsers');

// const buttonElement = fixture.debugElement.query(By.css('.send-button'));
   // btn.triggerEventHandler('click', null);
   btn.click();

    expect(spy).toHaveBeenCalled();
  });




});
