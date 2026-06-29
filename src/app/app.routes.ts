import { Routes } from '@angular/router';

import { Layout } from './components/layout/layout';

// Pages
import { DatesPage } from './pages/dates-page/dates-page';
import { GoalsPage } from './pages/goals-page/goals-page';
import { HomePage } from './pages/home-page/home-page';
import { RecipesPage } from './pages/recipes-page/recipes-page';

import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomePage },
      { path: 'dates', component: DatesPage },
      { path: 'goals', component: GoalsPage },
      { path: 'recipes', component: RecipesPage },
    ],
  },
  { path: '**', component: NotFound },
];
