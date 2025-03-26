import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PasswordComponent } from './pages/password/password.component';
import { TweetComponent } from './pages/tweet/tweet.component';
import { UserTweetComponent } from './pages/user-tweet/user-tweet.component';
import { ReplyComponent } from './pages/reply/reply.component';
import { MyTweetComponent } from './pages/my-tweet/my-tweet.component';
import { UpdateTweetComponent } from './pages/update-tweet/update-tweet.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    {path:'password', component: PasswordComponent},
    {path:'tweet', component: TweetComponent},
    {path:'tweet/:user', component: UserTweetComponent},
    {path:'myTweet/:user', component: MyTweetComponent},
    {path:'reply/:user/:id', component: ReplyComponent},
    {path:'update/:user/:id', component:UpdateTweetComponent}
];
