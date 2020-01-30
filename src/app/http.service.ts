import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { IUser } from './firebase/iuser';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'https://jsonplaceholder.typicode.com/posts'


  // private _users: IUser[] = [];
  private userList: AngularFireList<any>

  constructor(private http: HttpClient,  private firebase: AngularFireDatabase) { 
    this.userList = this.firebase.list('user');
  }
  title: any;
  getPosts() {
    return this.http.get(this.url)
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  // updatePost(post) {
  //   return this.http.put(this.url +'/' + post.id, JSON.stringify(post))
  // }
  deletePost(id) {
    return this.http.delete(this.url + '/'+ id)
  }
  //Firebase
  
  getUsersFromFirebase() {
    return this.userList;
  }
  addAUserToFirebase(user: IUser) {
    this.userList.push(user)
  }

  updateAUSerOnFirebase(user: IUser) {
    let $key = user.$key;
    delete user.$key
    this.userList.update($key, user)
  }
  deleteAUserFromFirebase($key: string) {
    this.userList.remove($key);
  }

}

