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

  branchData:any;
  modalRef:any;
  p:number = 1;
  searchKey:string = '';


  constructor(private _globSer:GlobalService, private _router:Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this._globSer.get("lighthouse").subscribe((res)=>{
      this.branchData = res;
      
    }, (error:any)=>{
      alert("Database error");
    });
  }

  delete(val:any,name:any){
    if(confirm("Are you sure to delete "+name+" ?")){
      this._globSer.deleteUser("lighthouse", val).subscribe(()=>{
        alert("Lighthouse deleted successfully");
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
