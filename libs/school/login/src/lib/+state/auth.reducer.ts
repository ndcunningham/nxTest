import { Action, createSelector } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and
 *  - authReducer
 */
export interface UserModel {
  id?: string;
}

/**
 * Interface to the part of the Store containing AuthState
 * and other information related to UserModel.
 */
export interface AuthState {
  readonly user: UserModel | null;
}

export const initialState: UserModel = {};

export function authReducer(state = initialState, action: AuthActions): UserModel {
  switch (action.type) {
    case AuthActionTypes.AuthAction:
      return state;

    case AuthActionTypes.LoginSuccess: {
      return { ...state, ...action.payload };
    }

    case AuthActionTypes.LoginFailed: {
      return { ...state, id: null };
    }

    default:
      return state;
  }
}

export const selectAuthUser = (state: AuthState) => state.user;
export const selectIsLoggedIn = createSelector(selectAuthUser, user => !!user);
