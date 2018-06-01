import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private user:AdminService) { }

  ngOnInit() {
  }

}
