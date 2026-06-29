import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";

@Component({
  selector: 'app-goals-page',
  imports: [Hero],
  templateUrl: './goals-page.html',
  styleUrl: './goals-page.css',
})
export class GoalsPage {}
