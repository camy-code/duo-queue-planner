import { Component, inject } from '@angular/core';
import { Card } from '../../components/card/card';

import { DateService } from '../../services/date-service';

@Component({
  selector: 'app-dates-page',
  imports: [Card],
  templateUrl: './dates-page.html',
  styleUrl: './dates-page.css',
})
export class DatesPage {
  dateService = inject(DateService);
}
