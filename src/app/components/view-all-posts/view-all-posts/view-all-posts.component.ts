import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewAllPostsService } from 'src/app/services/view-all-posts/view-all-posts.service';

@Component({
  selector: 'app-view-all-posts',
  templateUrl: './view-all-posts.component.html',
  styleUrls: ['./view-all-posts.component.css']
})
export class ViewAllPostsComponent implements OnInit {


  allPosts: any;
  postForm!: FormGroup;
  tags: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private viewallpostsService: ViewAllPostsService
  ) {}

  ngOnInit() {
   this.getAllPosts();
  }

  getAllPosts() {
    this.viewallpostsService.getAllPosts().subscribe(
      (res) => {
        console.log(res);
        this.allPosts=res;
      },
      (error) => {
        this.snackBar.open("Error occurred while fetching posts", "Close", {
          duration: 3000,
        });
      }
    );
  }
}
