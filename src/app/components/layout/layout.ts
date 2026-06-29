import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  // list of pages: [route, title]
  public pageList: Array<{ route: string; title: string }> = [
    { route: '', title: 'Home' },
    { route: 'dates', title: 'Dates' },
    { route: 'goals', title: 'Goals' },
    { route: 'recipes', title: 'Recipes' },
  ];

}
