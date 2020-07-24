import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user_array:any[];
  constructor(private router:Router,private fb:FormBuilder,private service:UserService) { }
  signup_form=this.fb.group({
    username:['',Validators.required],
    age:[null],
    email:['',Validators.email,Validators.required],
    phoneno:['',Validators.pattern("^[0-9]{10}$")],
    password:['',Validators.required]
  })
  ngOnInit(): void {
  }
  handle_signup(){
      if(this.signup_form.valid){
        this.user_array=[this.signup_form.value];
        this.service.createUser(this.user_array).subscribe(res => {    
         console.log("user created");
           });
      this.router.navigate(['/login']);
      }
        
    }

}
