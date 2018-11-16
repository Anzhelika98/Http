import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {User} from '../user';
import {HttpService} from '../http.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],

})
export class FormsComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: HttpService) {
  }

  // //Observable
  // public arrOfNumbers = of(2, 4, 10, 12, 13, 125).pipe(
  //   map((value: number) => value + 10),
  //   filter((n: number) => n % 2 === 0)
  // ).subscribe((x) => console.log(x));

  public users: User[];


  public firstName = new FormControl('');
  public myForm: FormGroup;
  public id;

  public user: User;

  ngOnInit() {
    this.id = 10;
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.maxLength(2)]
    });
    this.myForm.valueChanges.subscribe();

  }

  public addUser() {
    this.httpService.addUser({id: ++this.id, name: this.name, age: this.age}).subscribe((response) => {
      if (response.success) {
        this.users.push(this.user);
      }
    });
  }

  public updateName() {
    this.firstName.setValue('Alice');
  }

  get name(): string {
    return this.myForm.get('name').value;
  }

  get age(): number {
    return this.myForm.get('age').value;
  }


}
