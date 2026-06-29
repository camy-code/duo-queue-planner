import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
@Component({
  selector: 'app-recipes-page',
  imports: [Hero],
  templateUrl: './recipes-page.html',
  styleUrl: './recipes-page.css',
})
export class RecipesPage {}
