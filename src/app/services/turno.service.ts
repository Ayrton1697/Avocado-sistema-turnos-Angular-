import {Injectable} from '@angular/core';
import {Turno} from '../models/turno';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {global} from './global';


@Injectable()

export class TurnoService{

	public url:string;
	public turno:Turno;
	//public refresh$: new Subject<any>;

		constructor(
			private _http: HttpClient
			){
			this.url= global.url;
		}

reservarTurno(turno){

	let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');	

	let json= JSON.stringify(turno);

	let params='json='+json;

	return this._http.post(this.url+ 'turno',params, {headers:headers});
}

getTurnos():Observable<any>{
	let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');	

	return  this._http.get(this.url+ 'turno/0',{headers:headers});
}

getAceptados():Observable<any>{

	let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded')
								   

	return  this._http.get(this.url+ 'turno/1',{headers:headers});
}
getRechazados():Observable<any>{

	let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded')
								   

	return  this._http.get(this.url+ 'turno/2',{headers:headers});
}


changeStatus(id, status):Observable<any>{

	let preparams= JSON.stringify({id:id,
				status:status});

	let params= 'params='+preparams;

	let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');

	return this._http.post(this.url+'turno/setstatus', params, {headers:headers});

}
eliminarTurno(id){

	let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');

	return this._http.delete(this.url+'turno/'+id, {headers:headers});
}
}


