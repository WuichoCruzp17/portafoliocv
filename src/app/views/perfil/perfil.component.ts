import { Component, OnInit, ElementRef } from '@angular/core';
import { PerfilService } from '../../service/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private perfilService:PerfilService,  private el:ElementRef) { }

  ngOnInit() {
  }
  ocultarMostrar(event:Event){
    var $element = this.el.nativeElement.querySelector("#contenidoPefil");
    if(!$element.classList.contains('hidden')){
      $element.classList.add('hidden');
    }else{
      $element.classList.remove('hidden');
    }
  }
}
