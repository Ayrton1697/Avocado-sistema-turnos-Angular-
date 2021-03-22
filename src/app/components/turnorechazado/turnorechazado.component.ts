import { Component, OnInit } from '@angular/core';
import {TurnoService} from '../../services/turno.service'; 

@Component({
  selector: 'app-turnorechazado',
  templateUrl: './turnorechazado.component.html',
  styleUrls: ['./turnorechazado.component.css']
})
export class TurnorechazadoComponent implements OnInit {

			public rejectedBookings:[];
			public status;


  constructor(private _turnoService: TurnoService) { }

 		  ngOnInit(): void {

		  this.getRechazados();
	}


  eliminar(id){
  
   this._turnoService.eliminarTurno(id).subscribe(
   	response=>{
   		console.log(response);
       this.getRechazados();
       this._turnoService.getRechazados();
   	},error=>{
   		console.log(error);
   	}

   	);
  }

  getRechazados(){
      this._turnoService.getRechazados().subscribe(
          response=>{
            this.rejectedBookings= response.turnos;
            this.status='success';
            

          },error=>{
            console.log(error);
          }

          );
  }


}
