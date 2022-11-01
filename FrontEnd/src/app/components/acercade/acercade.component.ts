import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service'

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  titulo: string = '';
  acerca: string = '';
  imgPerfil: string = '';

  constructor(
    private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      this.nombre = portfolio.nombre;
      this.apellido = portfolio.apellido;
      this.titulo = portfolio.titulo;
      this.imgPerfil = portfolio.imgPerfil;
      this.acerca = portfolio.acerca;
  });

}
}
