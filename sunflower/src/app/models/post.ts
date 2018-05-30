export class Post {

	public id:number			;
	public title:string			;
	public content:string		;
	public date_post:string 	;

	constructor(title:string, content:string, date_post:string) {
		this.title = title			;
		this.content = content		;
		this.date_post = date_post	;
	}
}
