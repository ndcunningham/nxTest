import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthActionTypes, LoginUser, LoginSuccess } from './auth.actions';
import { AuthState } from './auth.reducer';
import { DataPersistence } from '@nrwl/nx';
import { AuthServiceModel } from '../../../../../nico-core/src';

@Injectable()
export class AuthEffects {
  @Effect() effect$ = this.actions$.ofType(AuthActionTypes.AuthAction);

  @Effect()
  loadAuth$ = this.dataPersistence.fetch(AuthActionTypes.LoginUser, {
    run: (action: LoginUser, state: AuthState) => {
      return new LoginSuccess(state);
    },

    onError: (action: LoginUser, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  login$ = this.dataPersistence.pessimisticUpdate(AuthActionTypes.LoginUser, {
    run: (a: LoginUser, state: AuthState) => {
      return this.service.login(state, a.payload).map(u => new LoginSuccess(u));
    },

    onError: (a, e: any) => {
      return null;
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthState>,
    private service: AuthServiceModel
  ) {}
}
