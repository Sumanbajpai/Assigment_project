import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/core/model/user-data-model';
import { AuthService } from 'src/app/core/service/auth-service/auth.service';
import { LoginService } from 'src/app/core/service/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  export class LoginComponent implements OnInit {
  userData: UserData
  isLoader: boolean
  submitted = false;
  configureForm:any = FormGroup;
  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
  ) {
    this.userData = new UserData();
    this.isLoader = false
    

}
 ngOnInit(){
  this.configureForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    
  });
}

get validationError() {
  return this.configureForm.controls;

}

submitLoginUserData() {
  this.isLoader = true;
  this.submitted = true;
  if (this.configureForm.invalid) {
    return;
  }
  this.loginService.isUserLoggedIn(this.userData)
    .subscribe((response:any) => {
     if(response.user){
     this.authService.saveToken(response.token);
     this.isLoader = false;
     this.router.navigate(['party-management']);
    }
    });
}
}


