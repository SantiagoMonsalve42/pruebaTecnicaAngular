import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'session',
    loadChildren:  () => import('./session/session.module').then(m => m.SessionModule)
  },
  {
    path: 'core',
    loadChildren:  () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: '**',
    redirectTo: 'session'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
