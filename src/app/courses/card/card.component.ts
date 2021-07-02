import { Component, OnInit, TemplateRef } from '@angular/core';
import { GlobalService } from '../../shared/service/global.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  coursesData:any;
  modalRef:any;
  p:number = 1;
  searchKey:string = '';

  constructor(private _globSer:GlobalService, private _router:Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this._globSer.get("courses").subscribe((res)=>{
      this.coursesData = res;
      
    }, (error:any)=>{
      alert("Database error");;
    });
  }

  delete(val:any, name:any){
    if(confirm("Are you sure to delete "+name+" course ?")){
      this._globSer.deleteUser("courses", val).subscribe(()=>{
        alert("Course deleted successfully");
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
