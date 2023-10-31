import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignInService } from './sign-in.service';
import { Credentials } from '../model/Credentials';

describe('SignInService', () => {
  let signInService: SignInService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignInService],
    });

    signInService = TestBed.inject(SignInService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(signInService).toBeTruthy();
  });

  it('should send a POST request for user authentication', () => {
    const credentials: Credentials = {
      userName: 'testuser',
      password: 'testpassword',
    };

    signInService.userAuthentication(credentials).subscribe((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpTestingController.expectOne(req => req.method === 'POST' && req.url.includes('/users/login'));
    expect(req.request.method).toBe('POST');
    req.flush(true);
  });

  it('should send a PUT request for updating credentials', () => {
    const credentials: Credentials = {
      userName: 'testuser',
      password: 'testpassword',
    };
    const newPassword = 'newpassword';

    signInService.updateCredentials(credentials, newPassword).subscribe();
    const req = httpTestingController.expectOne(req => req.method === 'PUT' && req.url.includes('/users/update'));
    expect(req.request.method).toBe('PUT');

    req.flush(null);
  });
});
