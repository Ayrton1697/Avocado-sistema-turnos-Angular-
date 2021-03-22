import { Component, OnInit} from '@angular/core';
import {TurnoService} from '../../services/turno.service';
import {Turno} from '../../models/turno';
import {share,map} from 'rxjs/operators';
import {Observable, interval} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css'],
  providers:[TurnoService]
})
export class TurnosComponent implements OnInit {

	public turnos;
	public status;
  public interval;
	public bookings$: Observable<any>;

  constructor(

  	private _turnoService: TurnoService,
    private _router: Router
  	) {}

  ngOnInit(): void {

  	// this._turnoService.getTurnos().subscribe(
  	// 	response=>{
  	// 		if(response.status== 'success'){
  	// 			this.turnos=response.turnos;
   //        console.log(this.turnos);
  	// 			this.status=response.status;
  			 
  	// 		}else{
  	// 			this.status= 'error';
  	// 		}
  			
  	// 	},error=>{
  	// 		console.log('error');
  	// 	}

  	// 	);

      this.getTurnos();

    }
   
    getTurnos(){
       this._turnoService.getTurnos().subscribe(
           response=>  this.bookings$ = response.turnos
         );
      // this.bookings$=this._turnoService.getTurnos().pipe(map(res=>this.turnos=res.turnos));
    }

  aceptar(turno){
      console.log(turno);
      this._turnoService.changeStatus(turno.id, 1).subscribe(
      response=>console.log(response));
       this.getTurnos();

 	
}
  rechazar(turno){
  
   this._turnoService.changeStatus(turno.id, 2).subscribe(
    response=>console.log(response));
   this.getTurnos();
  }
  

}
