import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { IDetalleEstudianteDetalleResponse } from '../../interfaces/core.interfaces';
import { SessionService } from 'src/app/session/services/session.service';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/comun/services/alerts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  idEstudiante: number = 0;
  estudiante: any;
  constructor(private _coreService: CoreService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.idEstudiante =SessionService.getIdEstudiante()??0;
    this.detalleEstudiante(this.idEstudiante);
  }
  detalleEstudiante(idEstudiante: number) {
    this._coreService.detalleEstudiante(idEstudiante).subscribe(
      response => {
        this.estudiante = response.data;
      },
      error => {
        console.error('Error al obtener detalle del estudiante:', error);
      }
    );
  }
  redirectToDetail(id:number) {
    this.router.navigate(['/core/subjects/'+id]);
  }
  desasignarMateria(idMateria: number) {
    this._coreService.desasignarMateria(idMateria, this.idEstudiante).subscribe(
      response => {
        if (response.status) {
          AlertsService.SuccessAlert("BIEN HECHO",response.data);
        } else {
          AlertsService.WarningAlert("ATENCION",response.data);
        }
        this.detalleEstudiante(this.idEstudiante);
      },
      error => {
        console.error('Error al desasignar materia:', error);
      }
    );
  }
}
