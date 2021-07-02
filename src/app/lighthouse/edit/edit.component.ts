import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../shared/service/global.service';
import {RegName,RegEmail, RegContact} from '../../shared/constants/constant';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id:number=0;
  lightObj:any;
  namePattern= RegName;
  contactPattern=RegContact;
  emailPattern=RegEmail;

  constructor(private _router:Router, private _actRoute:ActivatedRoute,
    private _globSer:GlobalService) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe((para)=>{
      this.id=Number(para.id);
    });
    this._globSer.getSingleRecord("lighthouse",this.id).subscribe((res)=>{
      this.lightObj=res;
    }, (error:any)=>{
      alert("Database error");
    });
  }

  updateBranch(val:any){
    const lighthouseData = {
      branch:val.branch,
      cordinator:val.cordinator,
      email:val.email,
      mobile:val.mobile,
      address:val.address,
    }
    
    this._globSer.updateRecord("lighthouse", this.id, lighthouseData).subscribe(()=>{
      alert("Lightouse data updated");
      this._router.navigate(['/lighthouse/card']);
    }, (error:any)=>{
      alert("Database error");
    })
  }

}
