import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
    // this.authService.user = {

    //   themes: [],
    //   posts: [],
    //   _id: '',
    //   tel: '',
    //   email: '',
    //   username: 'Peter',
    //   password: '',
    //   created_at: '',
    //   updatedAt: '',
    //   __v: 123
    // }

    // this.router.navigate(['/']);
  }

  loginHandler(form: NgForm): void {
    
  }
}
