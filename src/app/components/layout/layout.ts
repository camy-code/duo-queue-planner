import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  // list of pages: [route, title]
  private pageList: Array<{ route: string; title: string }> = [
    { route: '', title: 'Home' },
    { route: 'dates', title: 'Dates' },
    { route: 'goals', title: 'Goals' },
    { route: 'recipes', title: 'Recipes' },
  ];

}
