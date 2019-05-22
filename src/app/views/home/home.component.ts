import { Component, OnInit, ElementRef  } from '@angular/core';
import { TecnologiaService } from '../../service/tecnologia.service';
import { Tecnologia } from '../../interface/tecnologia.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tecnologias:any;
  constructor(private tecnlogiaServicio: TecnologiaService, private el:ElementRef) {
    this.getTecnologias();
   }

  ngOnInit() {
   
  }
  getTecnologias(){
    this.tecnologias =[];
    this.tecnologias = this.tecnlogiaServicio.tectnoList;
    console.log("Llamadoo de S:  ",this.tecnologias);
  }
  /**
   * Método para mostrar y ocultar las tecnologías.
   * @param event 
   */
  ocultarMostrar(event:Event){
    var $element = this.el.nativeElement.querySelector("#section-tecnologias");
    if(!$element.classList.contains('hidden')){
      $element.classList.add('animated','bounceOutLeft');
      setTimeout(function(){ $element.classList.add('hidden'); }, 500);
      /* $element.classList.add('hidden'); */
    }else{
      $element.classList.remove('hidden');
      $element.classList.remove('bounceOutLeft');
      $element.classList.add('bounceInRight');
    }

  }
}
/**
  Poner el nombre de las imagenes en firebase
 */
