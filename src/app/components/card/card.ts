import { Component } from '@angular/core';
import { input } from '@angular/core';
import { CardInterface } from '../../interfaces/card-interface';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  readonly cardInfo = input.required<CardInterface>();
}
