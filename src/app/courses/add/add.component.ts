import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {RegName} from '../../shared/constants/constant';
import { GlobalService } from '../../shared/service/global.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  // course:any;
  namePattern= RegName;

  constructor(private _globSer:GlobalService, private _router:Router) { }

  ngOnInit(): void {

    // this.course=new FormGroup({

    //   courseName:new FormControl('',[Validators.required, Validators.pattern(RegName)])

    // })

  }

  addCourse(val:any){
    const courseData = {
      name:val.name,
      duration:val.duration,
      fees:val.fees,
      description:val.description,
    }

    this._globSer.addUser("courses", courseData).subscribe(()=>{
      alert("Course added successfully");
      this._router.navigate(['courses/card']);
    }, (error:any)=>{
      alert("Database error");
    })
  }

}
