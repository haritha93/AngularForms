import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private user = new BehaviorSubject<string>('');
   newUser = this.user.asObservable();
   
   updateUser(newUser){
     this.user.next(newUser); 
   }
}
