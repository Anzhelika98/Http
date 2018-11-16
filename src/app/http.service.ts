import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from './user';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private users: any[];
  constructor(private http: HttpClient) {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getData() {
    return this.http.get('./src/app/user.json');
  }

  getUsers() {
    this.users = JSON.parse(localStorage.getItem('users'));
    return of(this.users);
  }

  getDataById(id: number) {
    return this.http.get('./src/app/user.json').pipe(
      map((user) => (user as Array<User>).find((elem) => id === elem['id']))
    );
  }

  addUser(user: User) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    return of({success: true});
  }


}
