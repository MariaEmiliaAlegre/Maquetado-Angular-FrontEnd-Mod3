import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  
 skills: any;
  


  constructor(
    private PortfolioService:PortfolioService) { }     //pasado base skills, constructor//

  ngOnInit(): void {
    this.PortfolioService.getDatos().subscribe(portfolio =>{
      
      this.skills=portfolio.skills;
      }
    )}
}
