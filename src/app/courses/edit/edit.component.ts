import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../shared/service/global.service';
import {RegName} from '../../shared/constants/constant';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id:number=0;
  courseObj:any;
  namePattern= RegName;

  constructor(private _router:Router, private _actRoute:ActivatedRoute,
    private _globSer:GlobalService) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe((para)=>{
      this.id=Number(para.id);
    });
    this._globSer.getSingleRecord("courses",this.id).subscribe((res)=>{
      this.courseObj=res;
    }, (error:any)=>{
      alert("error");
    });
  }

  updateCourse(val:any){
    const courseData = {
      name:val.name,
      duration:val.duration,
      fees:val.fees,
      description:val.description,
    }
    
    this._globSer.updateRecord("courses", this.id, courseData).subscribe(()=>{
      alert("Course Updataed Successfully");
      this._router.navigate(['/courses/card']);
    }, (error:any)=>{
      alert("Database error");
    })
  }

}
