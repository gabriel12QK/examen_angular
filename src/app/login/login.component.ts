import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import {AnimalesService} from 'src/app/animales.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _form = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private api:AnimalesService, private r:Router) { }

  ngOnInit(): void {
  }

  login(_form:any){
    this.api.login(_form).subscribe(data=>
      {
     let dataresponse:any=data;
     localStorage.setItem("token",dataresponse.accesToken);
     this.r.navigate(['animal']);
     (console.log(data))
      }
     )
    }

    cambio()
    {
      this.r.navigate(['registro']);
    }

}
