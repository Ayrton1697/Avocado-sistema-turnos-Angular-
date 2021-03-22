import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import Pusher from 'pusher-js';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[UserService]
})
export class AdminComponent implements OnInit {

	public identity;
  public show;
  public pusher: Pusher;
  public notification:string;

  constructor(

  	private _userService:UserService
  	) { 

     this.pusher = new Pusher('1463de1ab65d3021148c', {
          cluster: 'mt1',
          forceTLS: true
        });

  }

  ngOnInit(): void {


     var chanel=this.pusher.subscribe('my-channel');
      chanel.bind('my-event', data =>{
        this.notification=data.message;
        console.log(this.notification);
      alert(JSON.stringify(data));
      console.log(data);
    });



    this.identity=this._userService.getIdentity();
   
    if( this.identity !=null && this.identity != 'undefined'){
       this.show =true;
    }
  }
  
  logout(){
    this._userService.logout();
  }

}
