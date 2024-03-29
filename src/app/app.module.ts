import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './module/home/home.component';
import { ListUsersComponent } from './module/list-users/list-users.component';
import { AddUserComponent } from './module/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchUserComponent } from './module/search-user/search-user.component';
import { AddPostComponent } from './module/add-post/add-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './module/secure/login/login.component';
import { PostDetailComponent } from './module/post-detail/post-detail.component';
import { WpComponent } from './module/wp/wp.component';
import { FormTestComponent } from './module/form-test/form-test.component';
import { RegisterComponent } from './module/secure/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListUsersComponent,
    AddUserComponent,
    SearchUserComponent,
    AddPostComponent,
    LoginComponent,
    PostDetailComponent,
    WpComponent,
    FormTestComponent,
    RegisterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
