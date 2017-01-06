import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service'
@Component({
  selector: 'about',
  styleUrls: [`
  `],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public tokenValues : any;
  constructor(
    public route: ActivatedRoute, private loginService : LoginService
  ) {
      this.tokenValues = {};
  }

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
      });
  }
  public authenticate(username : string, password : string ) {
      this.loginService.getToken(username, password).subscribe(data => this.saveToken(data));
  }
  private saveToken(data) {
      this.tokenValues = data;
  }
}
