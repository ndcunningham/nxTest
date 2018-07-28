import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuth from '../+state';
import * as AuthActions from '../+state/auth-page.actions';

@Component({
  selector: 'school-login-page-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<fromAuth.AuthState>) {}

  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  ngOnInit() {}

  onSubmit($event: any) {
    this.store.dispatch(new AuthActions.AuthPageLogin($event));
  }
}
