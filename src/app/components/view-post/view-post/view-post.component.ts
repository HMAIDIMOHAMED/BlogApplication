import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewPostService } from 'src/app/services/view-post/view-post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  postId = this.activateRoute.snapshot.params['id'];
  postForm!: FormGroup;
  tags: string[] = [];
  postData: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private viewpostService: ViewPostService,
    private activateRoute : ActivatedRoute
  ) {}

  ngOnInit(){
    console.log(this.postId);
    this.getPostById();

  }

  getPostById(){
    this.viewpostService.getPostsById(this.postId).subscribe(res=>{
      this.postData=res;
      console.log(res);

    }, (error)=>{ this.snackBar.open("Error")
    })

  }
  

}
