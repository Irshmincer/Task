import { Component } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent{
  Name= new FormControl('');
  Username = new FormControl('');
  Age = new FormControl('');
  Salary = new FormControl('');
  Companyname = new FormControl('');
  Phone = new FormControl('');
  }
