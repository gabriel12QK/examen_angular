import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import {AnimalesService} from 'src/app/animales.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  public _form = new FormGroup({
    nombre: new FormControl('',Validators.required),
    foto: new FormControl('',Validators.required),
    id_tipo: new FormControl('',Validators.required)
  })
  
  tipo:any=[];
  animal:any=[];
  constructor(private api:AnimalesService, private r:Router) { }

  ngOnInit(): void {
    this.animal= this.api.showA().subscribe(res=>this.animal=res);
    this.tipo= this.api.showT().subscribe(res=>this.tipo=res);

  }

  registro(_form:any){
    this.api.reganimal(_form).subscribe(data=>(console.log(data)));
   }

   destroy(_id:any){
    this.api.destroyAnimal(_id).subscribe(data=>(console.log(data)));
   }

    

   cambio()
   {
     this.r.navigate(['busqueda']);
   }

}
