import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  url:string="http://127.0.0.1:8000/api/v1/"

  constructor(private http:HttpClient) { }

  reg(_form:any)
{
  let dir= this.url+"registro";
  return this.http.post<any>(dir,_form);
}

login(_form:any)
  {
    let dir= this.url+"login";
    return this.http.post<any>(dir,_form);
  }

  showT()
  {
    const header=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"showT";
    return this.http.get<any>(dir, {headers:header});
  }

  showA()
  {
    const header=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"showA";
    return this.http.get<any>(dir, {headers:header});
  }

  reganimal(_form:any)
  {
    const header=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"animal-reg";
    return this.http.post<any>(dir,_form,{headers:header});
  }

  buscar(_form:any)
  {
    const header=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"buscar/"+_form;
    return this.http.get<any>(dir,{headers:header});
  }


  destroyAnimal(_id:any)
  {
    const header=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"destroy/"+_id;
   return this.http.post<any>(dir,_id,{headers:header});
  }


}

