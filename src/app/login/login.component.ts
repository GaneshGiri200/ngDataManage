import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/service/global.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  uId:string="";
  uPass:string="";
  userData:any[] = [];

  constructor(private _globalSer:GlobalService, private _router:Router) { }

  ngOnInit(): void {
  }

  getData(){
    this._globalSer.get("users").subscribe((res)=>{
      this.userData = res;
      const data = this.userData.filter((items:any)=> { return (items.username === this.uId) && (items.password === this.uPass)})
      if(data.length > 0){
        this._globalSer.signIn(this.uId);
        this._router.navigate(['students']);

      }else {
        alert("Wrong username and password!");
        this.uId = "";
        this.uPass = "";
      }
    }, (error:any)=>{
      alert("Database error");;
    });
  }
}
