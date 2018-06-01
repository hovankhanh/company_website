import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user:AdminService) {
  }

  ngOnInit() {
  }
  loginAdmin(e)
  {
      e.preventDefault();
      console.log(e);
      var username = e.target.elements[1].value;
      var password = e.target.elements[2].value;
      console.log(username);
      console.log(password);
      if(username == 'admin@gmail.com' && password == 'admin')
      {
        this.user.setUserloggedIn();
        this.router.navigate(['admin']);
      }
  }

}
