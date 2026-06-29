import { Component, inject } from '@angular/core';
import { Card } from '../../components/card/card';

import { DateService } from '../../services/date-service';
import { Hero } from '../../components/hero/hero';
@Component({
  selector: 'app-dates-page',
  imports: [Card, Hero],
  templateUrl: './dates-page.html',
  styleUrl: './dates-page.css',
})
export class DatesPage {
  dateService = inject(DateService);
}
