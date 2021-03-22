import { Component, OnInit} from '@angular/core';
import {Turno} from '../../models/turno';
import {TurnoService} from '../../services/turno.service';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-turnoaceptado',
  templateUrl: './turnoaceptado.component.html',
  styleUrls: ['./turnoaceptado.component.css']
})
export class TurnoaceptadoComponent implements OnInit {

		public status;
		public acceptedBookings:Turno;

		  ngOnInit(): void {

			this.getAceptados();
		  	
 }

  constructor(
  		private _turnoService: TurnoService
  		) {

}

  rechazar(turno){
  	
   this._turnoService.changeStatus(turno.id, 2).subscribe(
    response=>this.getAceptados());
  	
  }

  getAceptados(){
  	  	this._turnoService.getAceptados().subscribe(
		  		response=>{
		  			this.acceptedBookings= response.turnos;
		  			this.status='success';
		  			console.log(this.acceptedBookings);

		  		},error=>{
		  			console.log(error);
		  		}

		  		);
  }

}
