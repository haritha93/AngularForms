import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  gender = ['female', 'male'];
  Signup: FormGroup;


  ngOnInit() {
    this.Signup = new FormGroup({

      'firstName': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, , Validators.minLength(6), Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')])
    });

    // this.Signup.setValue({
      
    //     'firstName': 'Haritha',
    //     'lastName': 'Nalamalpu',
    //     'email': 'haritha@gmail.com',
    //   'gender': 'female'

    // })
  }

  onSubmit() {
    console.log(this.Signup.value);
  }

  // forbiddenEmails(control: FormControl): Promise<any>
  // {
  // const promise= new Promise<any>((resolve,reject)=>{
  //   setTimeout(()=>{
  //     if(control.value==='test@test.com')
  //     {
  //       resolve({'emailIsForbidden':true});
  //     }
  //     else{
  //            resolve(null);
  //     }

  //   },1500);
  // });
  // return promise;
  // }
}





