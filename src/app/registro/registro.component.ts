import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AnimalesService} from 'src/app/animales.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public _form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private api:AnimalesService) { }

  ngOnInit(): void {
  }

  registrarE(_form:any){
    this.api.reg(_form).subscribe(data=>{
      (console.log(data));
      //this.router.navigate(['login']);
    });
   }

}
