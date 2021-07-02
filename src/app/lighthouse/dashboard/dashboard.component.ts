import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  signout() {
    if(confirm("Are you sure to logout?")){
      sessionStorage.removeItem('user');
      this._router.navigate(['/']);
    }
  }

}
