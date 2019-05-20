import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../service/perfil.service';
import { Perfil } from '../../interface/perfil.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  perfil:Perfil;
  constructor(private perfilService:PerfilService) { 

  }

  ngOnInit() {
    this.perfil= this.perfilService.perfil;
    console.log(this.perfil);
  }

}
