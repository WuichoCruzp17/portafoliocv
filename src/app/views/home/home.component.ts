import { Component, OnInit } from '@angular/core';
import { TecnologiaService } from '../../service/tecnologia.service';
import { Tecnologia } from '../../interface/tecnologia.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tecnologias:any;
  constructor(private tecnlogiaServicio: TecnologiaService) {
    this.getTecnologias();
   }

  ngOnInit() {
   
  }
  getTecnologias(){
    this.tecnologias =[];
    this.tecnologias = this.tecnlogiaServicio.tectnoList;
    console.log("Llamadoo de S:  ",this.tecnologias);
  }
}
/**
  Poner el nombre de las imagenes en firebase
 */
