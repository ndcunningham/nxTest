import { Action } from '@ngrx/store';

export const AuthPageLoginAction = '[Auth Page] Login Action';

export class AuthPageLogin implements Action {
  readonly type = AuthPageLoginAction;
  constructor(public payload: { username: string; password: string }) {}
}

export type AuthPageActions = AuthPageLogin;
