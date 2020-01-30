import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from './post.model';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  books: FormGroup
  posts: Post[] =[];
  constructor(private service: HttpService) {
  }
  panelOpenState = false;
  ngOnInit() {
    this.service.getPosts().subscribe((x: Post[]) =>{
      this.posts = x
    })
    this.books = new FormGroup({
      'title': new FormControl('', Validators.required)
    })
  }

  // updatePost(post){
  //   this.service.updatePost(post)
  //     .subscribe(response =>{
  //       console.log(response)
  //     })
  // }
  onDeletePost(post){
    let index = this.posts.indexOf(post);
    this.service.deletePost(post.id)
      .subscribe(response =>{
        this.posts.splice(index, 1)
      })
  }
  

  onSubmit() {
    const value = this.books.value
    let post = {
      id: value.id,
      title: value.title
    }

    this.service.createPost(post)
      .subscribe((response:any) =>{
        console.log(response)
        post.id = response.id;
        this.posts.splice(0,0, post)
      })
  }
}
