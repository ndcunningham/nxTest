import { Action } from '@ngrx/store';
import { UserModel } from './auth.reducer';

export enum AuthActionTypes {
  AuthAction = '[Auth] Action',
  LoginUser = '[Auth] Login User',
  LoginSuccess = '[Auth] Login Success',
  LoginFailed = '[Auth] Login Failed'
}

export class Auth implements Action {
  readonly type = AuthActionTypes.AuthAction;
}
export class LoginUser implements Action {
  readonly type = AuthActionTypes.LoginUser;
  constructor(public payload: UserModel) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
  constructor(public payload: any) {}
}

export type AuthActions = Auth | LoginUser | LoginSuccess | LoginFailed;
