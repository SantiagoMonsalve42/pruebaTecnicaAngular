import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './pages/main-container/main-container.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { InfoComponent } from './pages/info/info.component';


const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children:[
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'subjects',
        component: SubjectsComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: '**',
        redirectTo: "profile" 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
