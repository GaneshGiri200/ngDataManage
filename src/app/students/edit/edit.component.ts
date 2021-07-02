import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../shared/service/global.service';
import {RegName,RegEmail, RegContact, RegExpeience, RegCompletion} from '../../shared/constants/constant';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id:number=0;
  stdObj:any;
  namePattern= RegName;
  qualPattern= RegName;
  contactPattern=RegContact;
  emailPattern=RegEmail;
  expPattern=RegExpeience;
  compPattern=RegCompletion;

  constructor(private _router:Router, private _actRoute:ActivatedRoute,
    private _globSer:GlobalService) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe((para)=>{
      this.id=Number(para.id);
    });
    this._globSer.getSingleRecord("students",this.id).subscribe((res)=>{
      this.stdObj=res;
    }, (error:any)=>{
      alert("Database error");
    });
  }

  updateStd(val:any){
    const studentData = {
      name:val.name,
      email:val.email,
      mobile:val.mobile,
      gender:val.gender,
      qualification:val.qualification,
      yopass:val.completion,
      college:val.college,
      city:val.city,
      address:val.address,
      workexp:val.experience,
      lighthouse:val.lighthouse,
      course:val.course,
    }
    
    this._globSer.updateRecord("students", this.id, studentData).subscribe(()=>{
      alert("Student data updated successfully");
      this._router.navigate(['/students/card']);
    }, (error:any)=>{
      alert("Database error");
    })
  }

}
