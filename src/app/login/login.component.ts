import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '../services/communication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logined: FormGroup;
  firstName: string;
  userData: any;
  constructor (public router: Router, private communicationService: CommunicationService) {}

  ngOnInit() {
    this.logined = new FormGroup({

      'firstName': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'password': new FormControl(null, [Validators.required, , Validators.minLength(6)])
    });
  }
  onSubmit() {
    console.log(this.logined.value);
    if(this.logined.valid){
      this.userData = JSON.parse(localStorage.getItem(this.logined.value.firstName));
      this.communicationService.updateUser(this.userData);
      console.log('local storage data........', this.userData);
      if(this.userData){
        if(this.userData.firstName == this.logined.value.firstName) {
          if(this.userData.password == this.logined.value.password)
           alert('Welcome '+this.logined.value.firstName);
          //  console.log('local storage data........', this.logined.value);
          else alert('Wrong Password');
        } else alert('Wrong User');
      } else alert('No user found');
      this.router.navigate(['/login']);
      this.router.navigate(['/dashboard']);
      
    }
  }
}









