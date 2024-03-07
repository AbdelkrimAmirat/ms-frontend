import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { AddUserComponent } from './module/add-user/add-user.component';
import { ListUsersComponent } from './module/list-users/list-users.component';
import { SearchUserComponent } from './module/search-user/search-user.component';
import { AddPostComponent } from './module/add-post/add-post.component';
import { LoginComponent } from './module/secure/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers `/home`
  { path: 'home', component: HomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'search-user', component: SearchUserComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
