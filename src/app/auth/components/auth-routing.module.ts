import {RouterModule, Routes} from '@angular/router';
import { AuthComponent } from './auth.component';
import { HomeComponent } from '../../home/home.component';
import {NgModule} from '@angular/core';

// import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule {}

// import { Routes, RouterModule } from '@angular/router';
//
// import { HomeComponent } from './home';
// import { LoginComponent } from './login';
// import { RegisterComponent } from './register';
// import { AuthGuard } from './_guards';
//
// const appRoutes: Routes = [
//   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//
//   // otherwise redirect to home
//   { path: '**', redirectTo: '' }
// ];
//
// export const routing = RouterModule.forRoot(appRoutes);
