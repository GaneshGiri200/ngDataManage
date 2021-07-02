import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {RegName,RegEmail, RegContact, RegExpeience, RegCompletion} from '../../shared/constants/constant';
import { GlobalService } from '../../shared/service/global.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  coursesData:any;
  lighthouseData:any;
  dbError:any;
  // student:any;
  qualification:String[]=['BA','MA','BBA','MBA','SSC','HSC','BCA', 'MCA', 'BE/Btech', 'ME/MTech', 'BSC', 'MSC'];

  namePattern= RegName;
  contactPattern=RegContact;
  emailPattern=RegEmail;
  expPattern=RegExpeience;
  compPattern=RegCompletion;

  constructor(private _globSer:GlobalService, private _router:Router) { }

  ngOnInit(): void {
    this.fetchData();

    // this.student=new FormGroup({

    //   studentName:new FormControl('',[Validators.required, Validators.pattern(RegName)]),
    //   studentEmail:new FormControl('',[Validators.required, Validators.pattern(RegEmail)]),
    //   studentMobile:new FormControl('',[Validators.required, Validators.pattern(RegContact)]),
    //   studentExp:new FormControl('',[Validators.required, Validators.pattern(RegExpeience)]),
    //   studentCompletion:new FormControl('',[Validators.required, Validators.pattern(RegCompletion)]),
    // })
  }

  fetchData(){
    this._globSer.get("courses").subscribe((res)=>{
      this.coursesData = res;
      
    }, (error:any)=>{
      alert("Database error");
    });
    this._globSer.get("lighthouse").subscribe((res)=>{
      this.lighthouseData = res;
      
    }, (error:any)=>{
      alert("Database error");
    });
  }

  addStd(val:any){
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
      course:val.course,
      lighthouse:val.lighthouse,
    }

    this._globSer.addUser("students", studentData).subscribe(()=>{
      alert("Student added successfully");
      this._router.navigate(['students/card']);
    }, (error:any)=>{
      alert("Database error");
    })
  }

}
