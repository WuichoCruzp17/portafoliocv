import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajo } from '../interface/trabajos.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  trabajos:any;
  constructor(private http:HttpClient) {this.getTrabajos(); }
  private getTrabajos(){
    this.http.get('https://protafolio-64041.firebaseio.com/trabajo.json')
    .subscribe((resp:Trabajo[])=>{
      this.trabajos = this.resolverDescription(resp);
     
    });
  }

  private resolverDescription(trabajos:Trabajo[]){
    for(var i=0;i<trabajos.length;i++){
      if(trabajos[i].fechaFinal !== ""){
        var fecha  = new Date(trabajos[i].fechaInicio);
        var fechaFinal = new Date(trabajos[i].fechaFinal);
        var diff  = fechaFinal.getTime() - fecha.getTime();
        if(diff>=365){
          trabajos[i].tiempoTotal = "1 año";
        }
      }else{
        trabajos[i].fechaFinal ="Actual"
      }
      return trabajos;
    }
  }
}
