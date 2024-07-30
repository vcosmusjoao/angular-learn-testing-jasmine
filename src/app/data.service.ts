import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get("api/users");
  }

  getUserById(id:number){
    return this.http.get(`api/users/${id}`);
  }
}
