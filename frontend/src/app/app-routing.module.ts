import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SkinCareComponent } from './Components/products/skin-care/skin-care.component';
import { LoginComponent } from './Components/login/login.component';
import { TitleComponent } from './Components/partials/title/title.component';
import { SkinCarePdetailComponent } from './skin-care-pdetail/skin-care-pdetail.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'search/:searchTerm',component:SkinCareComponent},
  {path:'skin-care',component:SkinCareComponent},
  {path:'product-detail/:id',component:SkinCarePdetailComponent},
  {path:'login',component:LoginComponent},
  {path:'title',component:TitleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
