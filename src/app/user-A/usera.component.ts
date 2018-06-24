import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './usera.component.html'
})
export class UserAComponent implements OnInit{
  user:String;
  userAValue:String;
  constructor(private userService : UsersService){}

  //On ngOnInit, We are subscribing to the casted observable which was created
  //using asObservable() method
  ngOnInit(){
      this.userService.castUserAsObs.subscribe(userA => this.user = userA);
  }

  //This will be an onclick event and will change value and this should also notify
  //our other component i.e ComponentB
  editTheUser(){
      this.userService.editUser(this.userAValue);
  }
  
}
