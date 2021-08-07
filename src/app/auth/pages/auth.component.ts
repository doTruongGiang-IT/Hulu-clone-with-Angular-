import { environment } from './../../../environments/environment';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  slide: boolean = false;
  emailSignIn: string = "";
  passwordSignIn: string = "";
  firstName: string = "";
  lastName: string = "";
  emailSignUp: string = "";
  passwordSignUp: string = "";
  formSignUp!: FormGroup;
  formSignIn!: FormGroup;
  defaultValue: any = "";

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([
        {firstName: "Do", lastName: "Giang", email: "admin@gmail.com", password: "Admin_123", token: "", favorites: []},
      ]));
    };
    this.createFormSignIn();
    this.createFormSignUp();
  };

  slideForm(): void {
    this.slide = !this.slide;
    if(this.slide) {
      document.getElementById("container")?.classList.add("right_panel_active");
    }else {
      document.getElementById("container")?.classList.remove("right_panel_active");
    };
  };

  // submitForm(email: string, password: string, firstName: string = "", lastName: string = "") {
  //   if(firstName === "" && lastName === "") {
  //     let userSignIn = {email, password};
  //     this.authService.signIn(userSignIn, environment.api_key);
  //   }else {
  //     let newUser = {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       token: "",
  //       favorites: []
  //     };
  //     this.authService.signUp(newUser, environment.api_key);
  //   };
  // };

  submitFormSignIn(): void {
    this.authService.signIn(this.formSignIn.value, environment.api_key);
    this.resetForm();
  };

  submitFormSignUp(): void {
    let newUser = {
      firstName: this.formSignUp.value.firstName,
      lastName: this.formSignUp.value.lastName,
      email: this.formSignUp.value.email,
      password: this.formSignUp.value.password,
      token: "",
      favorites: []
    };
    this.authService.signUp(newUser, environment.api_key);
    this.resetForm();
  };

  resetForm(): void {
    this.formSignIn.reset();
    this.formSignUp.reset();
  };
  
  createFormSignUp(): void {
    this.formSignUp = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$")]]
    });
  };

  createFormSignIn(): void {
    this.formSignIn = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$")]]
    });
    // if(this.formSignIn.controls.email.dirty && this.formSignIn.controls.email.errors) {
    //   document.querySelector("input[name='emailSignIn']")?.classList.add("errors");
    // };
  };

}
