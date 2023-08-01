import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from '../studentlist/studentlist.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
constructor(private http:HttpClient) {}
public mystudent:Student=new Student()

}
  
stuSubmitt()

{ 

}
function stuSubmitt() {
  throw new Error('Function not implemented.');
}

