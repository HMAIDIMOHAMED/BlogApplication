import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post/create-post.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name/search-by-name.component';
import { ViewAllPostsComponent } from './components/view-all-posts/view-all-posts/view-all-posts.component';
import { ViewPostComponent } from './components/view-post/view-post/view-post.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{path:'create-post',component:CreatePostComponent},
{path:'search-by-name',component:SearchByNameComponent},
{path:'view-all-posts',component:ViewAllPostsComponent},
{path:'view-post/:id',component:ViewPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
