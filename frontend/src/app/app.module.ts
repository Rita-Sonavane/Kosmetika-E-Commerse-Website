import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductService } from './services/product.service';
import { SkinCareComponent } from './Components/products/skin-care/skin-care.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { SkinCareSearchComponent } from './partials/skin-care-search/skin-care-search.component';
import { FilterPipe } from './filter.pipe';
import { SkinCarePdetailComponent } from './skin-care-pdetail/skin-care-pdetail.component';
import { HairCareComponent } from './Components/products/hair-care/hair-care.component';
import { TitleComponent } from './Components/partials/title/title.component';
import { HairCareSearchComponent } from './partials/hair-care-search/hair-care-search.component';
import { HairCareDetailComponent } from './Components/hair-care-detail/hair-care-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SkinCareComponent,
    LoginComponent,
    TitleComponent,
    SkinCareSearchComponent,
    FilterPipe,
    SkinCarePdetailComponent,
    HairCareComponent,
    HairCareSearchComponent,
    HairCareDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
