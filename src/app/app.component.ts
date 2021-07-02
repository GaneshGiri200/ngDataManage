import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DataManage';
  mystdClass:any;
  mycourseClass:any;
  mylightClass:any;


  student(){
    this.mystdClass = {
    "stdcolor" : true
    }
    this.mycourseClass = {
    "stdcolor" : false
    }
    this.mylightClass = {
    "stdcolor" : false
    }
  }

  course(){
    this.mystdClass = {
    "stdcolor" : false
    }
    this.mycourseClass = {
    "stdcolor" : true
    }
    this.mylightClass = {
    "stdcolor" : false
    }
  }

  lighthouse(){
    this.mystdClass = {
    "stdcolor" : false
    }
    this.mycourseClass = {
    "stdcolor" : false
    }
    this.mylightClass = {
    "stdcolor" : true
    }
  }

  log() {
    this.mystdClass = {
    "stdcolor" : false
    }
    this.mycourseClass = {
    "stdcolor" : false
    }
    this.mylightClass = {
    "stdcolor" : false
    }
  }

}

