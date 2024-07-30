import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from './mock/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUser().subscribe((users:any)=>{
      expect(users).toBeTruthy();
      expect(users.length).toBe(3);
      const secondeUser = users.find((user2:any)=>user2.id===2)
      expect(secondeUser.name).toBe('Hermione Granger');
    });
    const mockReq = testingController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS));

  });

  it('should get user by id', () => {
    service.getUserById(1).subscribe((user:any)=>{
      expect(user).toBeTruthy();
      expect(user.name).toBe("Harry Potter");
    });
    const mockReq = testingController.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[0]);

  });
});
