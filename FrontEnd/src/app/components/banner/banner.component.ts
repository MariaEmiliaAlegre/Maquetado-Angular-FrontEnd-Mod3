import { Component, OnInit } from '@angular/core';
import { PortfolioService }  from 'src/app/servicios/portfolio.service';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

   // Inicia variable de instancia para almacenar los datos con los que trata el Servicio
  
   imagen: string = '';

  constructor(
    // Inyectar el Servicio para tener acceso en la clase a los Metodos
    private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);

      // Definir informacion a mostrar
     
      this.imagen = portfolio.banner.imagen;
  });
  }
}
