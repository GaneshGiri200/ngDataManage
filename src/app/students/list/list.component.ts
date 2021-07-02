import { Component, OnInit, TemplateRef } from '@angular/core';
import { GlobalService } from '../../shared/service/global.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  studentData:any;
  modalRef:any;
  p:number = 1;
  searchKey:string = '';

  constructor(private _globSer:GlobalService, private _router:Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this._globSer.get("students").subscribe((res)=>{
      this.studentData = res;
      
    }, (error:any)=>{
      alert("Database error");
    });
  }

  delete(val:any){
    if(confirm("Are you sure to delete student with id "+ val+" ?")){
      this._globSer.deleteUser("students", val).subscribe(()=>{
        alert("Student deleted successfully!");
        this.fetchData();
    }, (error:any)=>{
      alert("Database error");
    });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
