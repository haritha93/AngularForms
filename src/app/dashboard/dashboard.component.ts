import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  firstName: any;
  userData: any;
  constructor ( private communicationService:CommunicationService){

  }

  ngOnInit(){
    
   this.communicationService.newUser.subscribe(res => {
     this.userData=res;
     console.log('result...............', res);
   })
  }
  onsubmit(){
    console.log('local storage data........', this.userData.value);
  }

}
