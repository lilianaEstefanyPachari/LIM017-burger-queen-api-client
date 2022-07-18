import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
// import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    // service = new LoginService(httpClientSpy as any)
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: []
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Debe retornar objeto del usuario
  it('Debe retornar objeto del usuario (Login correcto)', () => {
    //TODO: Mock de datos!
    const mockUserCredentials = {
      email: 'anita@systers.xyz',
      password: '123456'
    }

    const mockResult = {
      token: "dffffeer44"
    }

    service.postUsers(mockUserCredentials)
      .subscribe(res => { //TODO:Hacer que de por finalizado la prueba:
        expect(res).toEqual(mockResult);
      })

    const req = httpTestingController.expectOne(`http://localhost:8080/login`);
    req.flush(mockResult);
  });

  it('Deberia retornar un error 400', ()=> {
    //TODO: mock de datos
    const invalidCredentials = {
      email: 'chester@abc.com',
      password: ''
    }
    const mockResult = new HttpErrorResponse({
      error: "Usuario invalido",
      status: 400,
      statusText: 'Not Found'
    })
    service.postUsers(invalidCredentials)
      .subscribe({
        next: res => {

        },
        error: error => {
          expect(error.status).toEqual(400);
        }
      })
      const req = httpTestingController.expectOne(`http://localhost:8080/login`);
      req.flush(mockResult);
  });

});
