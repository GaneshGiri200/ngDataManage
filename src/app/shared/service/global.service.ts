import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { base_url } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  private options = {headers: new HttpHeaders().set('Content-type', 'application/json')}
  constructor(private _http:HttpClient) { }

  formateError(error:any){
    return throwError(error.message);
  }

  get(path:string):Observable<any>{
    return this._http.get(base_url+path).pipe(catchError(this.formateError));
  }

  addUser(path:string, body:{}){
    return this._http.post(base_url+path, body).pipe(catchError(this.formateError));
  }

  deleteUser(path:string, id:number){
    const url = `${base_url+path}/${id}`;
    return this._http.delete(url).pipe(catchError(this.formateError));
  }

  getSingleRecord(path:string, id:number){
    const url = `${base_url+path}/${id}`;
    return this._http.get(url).pipe(catchError(this.formateError));
  }

  updateRecord(path:string, id:any, body:{}){
    const url=`${base_url+path}/${id}`;
    return this._http.put(url,body).pipe(catchError(this.formateError));
  }

  signIn(user:any) {
    sessionStorage.setItem('user', user);
  }

  signOut(){
    sessionStorage.removeItem('user');
  }

}
