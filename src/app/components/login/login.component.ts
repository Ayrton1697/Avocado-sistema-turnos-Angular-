import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

	public user:User;
	public status:string;
	public token;
	public identity;


  constructor(
  	private _userService:UserService,
  	private _router: Router
  	) { 
  	this.user= new User(1,'','' ,'ROLE_USER','' ,'');
  }

  ngOnInit(): void {

  }

  onSubmit(form){

  	this._userService.login(this.user).subscribe(

  		response=>{
				
	  			if(response.status != 'error'){
	  				
	  				this.status= response.status;
	  				this.token= response;
	  				
	  				//Identidad del usuario

	  				this._userService.login(this.user,true).subscribe(

	  					response=>{
	  						this.identity=response;
	  					
	  						localStorage.setItem('token',this.token);
	  						localStorage.setItem('identity',JSON.stringify(this.identity));
  							this._router.navigate(['/turnos']);
	  					},error=>{
	  						this.status='error';
	  					});

	  			}else{
	  				this.status= 'error';
	  				console.log('error');
	  			}


  		},
  		error=>{
			this.status = 'error';
			console.log('error');
  		}

  		);

}

  
  	

}
