import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  user: User;
  public userId: number;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => {
      this.users = <User[]>data;
    });
  }


  public change() {
    this.httpService.getDataById(+this.userId).subscribe(user => this.user = (user));
  }
}
