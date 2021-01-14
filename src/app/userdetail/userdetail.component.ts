import { Component, OnInit } from '@angular/core';
import { UserService} from '../service/user.service';
import {User} from "../user";

import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  users: User[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};
  constructor(private router: Router,private userservice : UserService ) { }
  Users: any = UserService;
   
  ngOnInit() {
    this.Users = this.getUsers();
  }
  getUsers(): User[] {
    return this.userservice.getUsersFromData();
  }



  //edit or update for edit button    
showEditUserForm(user: User) {
  if (!user) {
    this.userForm = false;
    return;
  }
  this.editUserForm = true;
  this.editedUser = user;
  
}

 updateUser() {
  this.userservice.updateUser(this.editedUser);
  this.editUserForm = false;
  this.editedUser = {};
}


}
