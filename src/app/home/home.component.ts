import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  recipes: any[] = [];

  constructor(private appService: AppServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getDataApi();
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  getDataApi(): void {
    this.appService.getRecipes().subscribe(
      (res: any) => {
        this.recipes = res?.recipes || [];
      },
      (err) => {
        console.error('API Error:', err);
      }
    );
  }

  goToAbout(recipe: any) {
    this.router.navigate(['/about'], {
      queryParams: {
        name: recipe.name,
        image: recipe.image,
        description: recipe.description
      }
    });
  }
}
