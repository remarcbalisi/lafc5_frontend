import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LandingComponent } from './components/landing/landing.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'me',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-info/:id',
    component: UserInfoComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
