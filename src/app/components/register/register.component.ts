import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

	public user:User;
	public status:string;

  constructor(
  	private _userService:UserService
  	) { 
  	this.user=new User(1,'','','ROLE_USER','','');
  	}

  ngOnInit(): void {
  }

  onSubmit(form){
  	this._userService.register(this.user).subscribe(

  		response=>{
  			if(response.status=='success'){
  				this.status=response.status;
  				form.reset();
  			}else{
  				this.status='error';
  			}

  		},error=>{
  			console.log(<any>error);  		}

  		);

  }

}
