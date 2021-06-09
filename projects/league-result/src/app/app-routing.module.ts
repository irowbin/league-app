import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'result-system',
    loadChildren: () =>
      import('./modules/result-system/result-system.module').then(
        ({ ResultSystemModule }) => ResultSystemModule,
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./modules/intro/intro.module').then(
        ({ WelcomeModule }) => WelcomeModule,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
