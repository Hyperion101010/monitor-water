import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private snackBar: MatSnackBar, private router: Router) { }

  username: string;
  password: string;
  showSpinner = false;

  ngOnInit() {
    sessionStorage.removeItem('sessionId');
  }

  login() {
    this.dataService.login(this.username, this.password).subscribe((data) => {
      console.log(data);
      const snackBarRef = this.snackBar.open('Login status: ', data['status'], {
        duration: 2000,
      });

      snackBarRef.afterDismissed().subscribe(() => {
        if (data['status'] === 'Success') {
          sessionStorage.setItem('sessionId', data['sessionId']);
          this.router.navigate(['/home']);
        }
      });
    });
  }

}
