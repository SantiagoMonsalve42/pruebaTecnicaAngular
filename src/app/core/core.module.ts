import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainContainerComponent } from './pages/main-container/main-container.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './pages/info/info.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MainContainerComponent,
    SubjectsComponent,
    NavbarComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
