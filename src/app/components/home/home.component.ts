import { Component, OnInit } from '@angular/core';
import {TurnoService} from '../../services/turno.service';
import {Turno} from '../../models/turno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public turno:Turno;



    constructor(
  	private _turnoService: TurnoService
  	){
      this.turno = new Turno(1,'','',null,'',1,1,0);   
     }

  ngOnInit(){
  	
  }
  onSubmit(form){
  	this._turnoService.reservarTurno(this.turno).subscribe(
      response=>{
        console.log(response)
      },
      error=>{console.log(error);
        console.log(this.turno);
    }
    );
  
  }
   reservar(){
     this.turno= new Turno(1,'Ayrton','carlos@carlos.com',111111,'2020-07-04',2,1,1);
     this._turnoService.reservarTurno(this.turno).subscribe(
      response=>console.log(response));
      console.log(this.turno);
   }
}
