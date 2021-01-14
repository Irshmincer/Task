import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserService} from '../service/user.service';
import {User} from "../user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private userservice : UserService) {}
    Users: any = UserService;
   
    ngOnInit() {
      this.users = this.getUsers();
    }
    getUsers(): User[] {
      return this.userservice.getUsersFromData();
    }
            
  users: User[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};

  

   
  




//remove user for delete button
   removeuser(usdel: User){
     this.userservice.deleteuser(usdel);
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






