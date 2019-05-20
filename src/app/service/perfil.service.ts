import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../interface/perfil.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
   perfil:Perfil;
  constructor(private http:HttpClient) { this.getPerfil(); }

  private getPerfil(){
    this.http.get("https://protafolio-64041.firebaseio.com/perfil.json")
    .subscribe((perfil:Perfil)=>{
      this.perfil = perfil;
     /*  console.log(this.perfil); */
    });
  }
}
