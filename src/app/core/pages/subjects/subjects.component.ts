import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../../services/core.service';
import { IMateria } from '../../interfaces/core.interfaces';
import { AlertsService } from 'src/app/comun/services/alerts.service';
import { SessionService } from 'src/app/session/services/session.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  materias: IMateria[] = [];
  idEstudiante: number = 0;
  constructor(private router: Router,
              private coreservice: CoreService) { }

  ngOnInit(): void {
     this.idEstudiante =SessionService.getIdEstudiante()??0;
    this.ObtenerMaterias();
  }
  ObtenerMaterias(){
    this.coreservice.obtenerMaterias().subscribe((response) => {
      this.materias = response.data;
    }, (error) => {
      AlertsService.ErrorAlert("ERROR",error.error.message);
    });
  }

  AsignarMateria(idMateria: number){
    this.coreservice.asignarMateria(idMateria, this.idEstudiante).subscribe((response) => {
      if(response.error != null){
        AlertsService.WarningAlert("Atención", response.error);
      }else{
        AlertsService.SuccessAlert("Asignación exitosa", response.data);
      }
      
    }, (error) => {
      console.log(error);
      AlertsService.ErrorAlert("ERROR",error.error.message);
    });
  }
  redirectToDetail(id:number) {
    this.router.navigate(['/core/subjects/'+id]);
  }

}
