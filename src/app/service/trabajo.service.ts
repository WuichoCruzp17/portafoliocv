import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  trabajos:any;
  constructor(private http:HttpClient) {this.getTrabajos(); }
  private getTrabajos(){
    this.http.get('https://protafolio-64041.firebaseio.com/trabajo.json')
    .subscribe(resp=>{
      this.trabajos = resp;
      console.log(resp);
    });
  }
}
