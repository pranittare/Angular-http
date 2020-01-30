import { Component, OnInit } from '@angular/core';
import { IUser } from '../firebase/iuser';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  userList: IUser[];
  index: any;
  update: string ="";
  constructor(private Http: HttpService) { }

  ngOnInit() {
    this.Http.getUsersFromFirebase().snapshotChanges().forEach(usersSnapShot =>{
      this.userList = [];
      usersSnapShot.forEach(userSnapShot =>{
        let user = userSnapShot.payload.toJSON();
        user['$key'] = userSnapShot.key;
        
        this.userList.push(user as IUser);
        return this.index = user['$key']
      })
    })
  }
  onDelete(){
    this.Http.deleteAUserFromFirebase(this.index)
  }
  onUpdate(index){
    this.userList[index].firstName = this.update
    this.Http.updateAUSerOnFirebase(this.userList[index])
    this.update = ""
  }
 
}
