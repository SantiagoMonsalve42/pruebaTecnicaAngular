import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainContainerComponent } from './pages/main-container/main-container.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './pages/info/info.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpBasicInterceptor } from './interceptor/http.interceptor';
import { SubjectDetailComponent } from './pages/subject-detail/subject-detail.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MainContainerComponent,
    SubjectsComponent,
    NavbarComponent,
    InfoComponent,
    SubjectDetailComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpBasicInterceptor,
    multi: true,
  }],
})
export class CoreModule { }
