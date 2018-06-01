import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  private  isUserLoggedIn;
  private username;

  constructor() {
   this.isUserLoggedIn = false;
 }
 setUserloggedIn()
  {
    this.isUserLoggedIn = true;
  }
  getUserloggedIn()
  {
    return this.isUserLoggedIn;
  }

}
