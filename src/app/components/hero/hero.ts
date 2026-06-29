import { Component,input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-hero',
  imports: [TitleCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  color = input.required<String>();
  text = input.required<String>();
}
