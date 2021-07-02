import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {RegName,RegEmail,RegContact} from '../../shared/constants/constant';
import { GlobalService } from '../../shared/service/global.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  course:any;
  namePattern= RegName;
  contactPattern=RegContact;
  emailPattern=RegEmail;

  constructor(private _globSer:GlobalService, private _router:Router) { }

  ngOnInit(): void {

    this.course=new FormGroup({

      courseName:new FormControl('',[Validators.required, Validators.pattern(RegName)])

    })

  }

  addBranch(val:any){
    const branchData = {
      branch:val.branch,
      cordinator:val.cordinator,
      email:val.email,
      mobile:val.mobile,
      address:val.address,
    }

    this._globSer.addUser("lighthouse", branchData).subscribe(()=>{
      alert("Lighthouse data addes successfully");
      this._router.navigate(['lighthouse/card']);
    }, (error:any)=>{
      alert("Database error");
    })
  }

}
