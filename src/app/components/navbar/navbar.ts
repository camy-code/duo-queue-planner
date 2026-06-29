import { Component } from '@angular/core';
import { input } from '@angular/core';

import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly pageList = input.required<Array<{ route: string; title: string }>>();
  
}
