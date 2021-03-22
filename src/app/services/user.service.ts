import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 
import {global} from './global';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Injectable()

export class UserService{

	public url:string;
	public identity;
	public token;

	constructor(

		private _http:HttpClient,
		private _router:Router
		){
		this.url =global.url;
	}


	register(user):Observable<any>{

		let json= JSON.stringify(user);
		let params= 'json='+json;

		let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');

		return this._http.post(this.url+'register', params, {headers:headers});
	}

	login(user,gettoken=null):Observable<any>{
		
		if(gettoken !=null){
			user.gettoken='true';

		}

	 	let json= JSON.stringify(user);
	 	let params= 'json='+json;

	 	let headers= new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');

	 
	 	return this._http.post(this.url+'login', params, {headers:headers});
	}

	logout(){
		localStorage.removeItem('token');
		localStorage.removeItem('identity');
		this._router.navigate(['']);
	}

	getIdentity(){

		let identity=JSON.parse(localStorage.getItem('identity'));

		if(identity && identity != 'undefined'){
			this.identity= identity;
		}else{
			this.identity=null;
		}
		return this.identity;

	}
	getToken(){
		let token= localStorage.getItem('token');

		if(token && token !='undefined'){
			this.token=token;
		}else{
			this.token=null;
		}
		return this.token;
	}	

	}
