import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { DatabaseComponent } from './database/database.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'firebase', component: FirebaseComponent},
  {path: 'database', component: DatabaseComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
