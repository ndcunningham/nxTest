import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthActionTypes, LoginUser, LoginSuccess, LoginFailed } from './auth.actions';
import { AuthPageLoginAction } from './auth-page.actions';
import { AuthState } from './auth.reducer';
import { DataPersistence } from '@nrwl/nx';
import { AuthServiceModel } from '../../../../../nico-core/src';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  // @Effect() effect$ = this.actions$.ofType(AuthActionTypes.AuthAction);

  // @Effect()
  // loadAuth$ = this.dataPersistence.fetch(AuthActionTypes.LoginUser, {
  //   run: (action: LoginUser, state: AuthState) => {
  //     return new LoginSuccess(state);
  //   },

  //   onError: (action: LoginUser, error) => {
  //     console.error('Error', error);
  //   }
  // });

  @Effect()
  login$ = this.dataPersistence.pessimisticUpdate(AuthPageLoginAction, {
    run: (a: any, state: AuthState) => {
      return this.service.login(state, a.payload).pipe(map(u => new LoginSuccess(u)));
    },

    onError: (a, e: any) => {
      return new LoginFailed(e);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthState>,
    private service: AuthServiceModel
  ) {}
}
