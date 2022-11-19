import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { persona } from '../../model/persona.model';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  persona: persona = null;

  constructor(private personaService: PersonaService,
              private activatedRouter: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
        this.personaService.detail(id).subscribe(
          data =>{
          this.persona = data;
        }, err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
      this.router.navigate([''])
    }, err => {
      alert("Error al modificar");
      this.router.navigate
  }
    )
}
  uploadImage($event: any){
  }
}
