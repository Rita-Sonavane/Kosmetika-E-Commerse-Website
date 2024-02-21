import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm!:FormGroup;
  isSubmitted:boolean = false;
  returnUrl='';


  constructor(private formBuilder:FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  //loginForm.controls.email
  //alternative
  get fc(){
    return this.loginForm.controls;
    //now write  fc.controls
  }


  submit(){
    console.log("submitted");

    this.isSubmitted =  true;

    if(this.loginForm.invalid) return;

    this.userService.login({email:this.fc['email'].value,
      password: this.fc['password'].value}).subscribe(() => {
       // console.log(this.fc.email.value,this.fc.password.value,"kjaskjasd")
        this.router.navigateByUrl(this.returnUrl);
      //  this.router.navigateByUrl('/cart');
      });


  }

}
