 export class Turno{

 	constructor(
 		public id:number,
		public user_name:string,
	 	public user_email:string,
	 	public user_phone:number,
	 	public fecha:string,
	 	public hora:number,
	 	public cantidad_personas:number,
	 	public status: number
 		){}
 
	}