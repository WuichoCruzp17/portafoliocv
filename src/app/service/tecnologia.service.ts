import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../interface/tecnologia.interface';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  tectnoList:Tecnologia[];
  cargado= false;
  constructor(private http:HttpClient) { this.getTecnologia();}


  private getTecnologia(){
    this.http.get('https://protafolio-64041.firebaseio.com/tecnologia.json')
    .subscribe((tecnologias:Tecnologia[])=>{
      this.tectnoList = tecnologias;
      console.log(this.tectnoList);
      this.cargado =true;
    });
  }
}
