import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs'
import { LoginService } from './login.service';
import { Users } from '../employees';
import { UsersService } from './users.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';

describe('LoginService', () => {
  let service: LoginService;
  let httpClientSpy: { post: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LoginService(httpClientSpy as any)
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: []
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Debe retornar objeto del usuario
  it('Debe retornar objeto del usuario (Login correcto)', (done: DoneFn) => {
    //TODO: Mock de datos!
    const mockUserCredentials = {
      email: 'anita@systers.xyz',
      password: '123456'
    }

    const mockResult = {
      token: "dffffeer44"
    }

    httpClientSpy.post.and.returnValue(of(mockResult));  //TODO: Observable

//TODO: ACTION

    // const {  } = mockUserCredentials

    service.postUsers(mockUserCredentials)
    .subscribe(res => { //TODO:Hacer que de por finalizado la prueba:
      expect(res).toEqual(mockResult);
      done();
    })
  });
});
