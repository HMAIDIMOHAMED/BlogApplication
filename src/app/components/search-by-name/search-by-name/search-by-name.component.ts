import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchByNameService } from 'src/app/services/search-by-name/search-by-name.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  name: string = '';
  postData: any;
  result: any[] = [];

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private searchByNameService: SearchByNameService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPostByName(); // Appel initial lors du chargement du composant
  }

  getPostByName() {
    this.searchByNameService.getPostByName(this.name).subscribe(
      (res) => {
        console.log(res);
        this.result = res; // Affectation des résultats à this.result
      },
      (error) => {
        console.error('Error fetching posts:', error);
        this.snackBar.open('Error', 'Close', {
          duration: 2000
        });
      }
    );
  }
}
