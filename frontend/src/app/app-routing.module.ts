import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SkinCareComponent } from './Components/products/skin-care/skin-care.component';
import { LoginComponent } from './Components/login/login.component';
import { TitleComponent } from './Components/partials/title/title.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'skin-care',component:SkinCareComponent},
  {path:'login',component:LoginComponent},
  {path:'title',component:TitleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
