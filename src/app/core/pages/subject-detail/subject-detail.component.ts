import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../services/core.service';
import { IEstudiante, IMateriaDetalle } from '../../interfaces/core.interfaces';
import { AlertsService } from 'src/app/comun/services/alerts.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  idMateria: number = 0;
  detalleMateria!: IMateriaDetalle;
  estudiantes: IEstudiante[] = [];
  constructor(private _route:ActivatedRoute,
              private router:Router,
              private coreservice:CoreService
  ) { }
  ngOnInit(): void {
    this.idMateria = this._route.snapshot.params['id'];
    if(this.idMateria == undefined || this.idMateria == null){
      this.router.navigate(['/core/subjects']);
    }else{
      this.getDetailMateria();
    }
  }
  getDetailMateria(){
    this.coreservice.obtenerMateriaDetalle(this.idMateria).subscribe((response) => {
      this.detalleMateria = response.data;
      this.estudiantes = this.detalleMateria?.estudiantes || [];
    }, (error) => {
      AlertsService.ErrorAlert("ERROR",error.error.message);
    });
  }
}
