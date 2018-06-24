import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './userb.component.html'
})
export class UserBComponent implements OnInit{
  private userBValue:String;
  constructor(private userService : UsersService){}

  //On ngOnInit, We are subscribing to the casted observable which was created
  //using asObservable() method
  ngOnInit(){
      this.userService.castUserAsObs.subscribe(userB => this.userBValue = userB);
  }

  
}
