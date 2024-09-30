import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { UserData } from '../../model/user-data-model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn(user: UserData) {
    return this.http.post<any>(`https://ap.greatfuturetechno.com/login/`,
      user)
      .pipe(map((data: any) => data));
  }
}
