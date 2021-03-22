import { Component,OnInit} from '@angular/core';
import {Turno} from './models/turno';
import {TurnoService} from './services/turno.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TurnoService]
})
export class AppComponent {

  public title = 'avocado-front';


  constructor(
  	private _turnoService: TurnoService
  	){}

  ngOnInit(){
   }
  onSubmit(form){
  	
  }
}
