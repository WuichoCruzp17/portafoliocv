import { Component, OnInit } from '@angular/core';
import { TrabajoService } from '../../service/trabajo.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  trabajos:any;
  constructor(private trabajoService:TrabajoService) {
  }

  ngOnInit() {
  }
}
