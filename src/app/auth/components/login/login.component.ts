import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import { AuthRoutingModule } from '';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  public login() {
   // this.router.navigate(['/home']);
   //  this.router.navigateByUrl('/home').then(_ => { removeSpinner(); });
  }
}
