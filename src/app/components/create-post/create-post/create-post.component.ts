import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreatePostService } from 'src/app/services/create-post/create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postForm!: FormGroup;
  tags: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private createpostService: CreatePostService
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img : [null, Validators.required],
      postedBy : [null, Validators.required]
    });
  }

  add(event: any){
    const value = (event.value || '').trim();
    if(value){
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  remove(tag: any){
    const index= this.tags.indexOf(tag);

    if(index>=0){
      this.tags.splice(index,1);

    }
  }

  createNewPost(){
    const data = this.postForm.value;
    data.tags = this.tags;

    this.createpostService.createNewPost(data).subscribe(res=>{
      this.snackBar.open("Posted Successfully", "Ok");
      this.router.navigateByUrl("/")
    },error=>{
      this.snackBar.open("Something Went Wrong", "Ok")
    })
  }

}
