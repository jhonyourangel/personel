import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './common/navigation/navbar/navbar.component';

import { AuthenticationService } from './common/services/authentication.service';
import { NavBarService } from './common/services/nav-bar.service';
import { DataService } from 'app/common/services/data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { SidebarComponent } from './common/navigation/sidebar/sidebar.component';
import { SmartInputComponent } from './components/smart-input/smart-input.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';

// plugin
import { FileSelectDirective } from 'ng2-file-upload';



const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:search', component: UsersListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    SmartInputComponent,
    UsersListComponent,
    ProfileImageComponent,
    FileSelectDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [NavBarService/*AuthenticationService, , DataService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
