import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import {AnimalesService} from 'src/app/animales.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public _form = new FormGroup({
    buscar: new FormControl('',Validators.required),
  })
  button:boolean=false;
  tipo:any=[];
  constructor(private api:AnimalesService, private r:Router) { }

  ngOnInit(): void {
    
  }
  buscar(_form:any){
    this.button=true;
    this.api.buscar(_form).subscribe(data=>console.log(data));
  }
  cambio()
  {
    this.r.navigate(['animal']);
  }

}
