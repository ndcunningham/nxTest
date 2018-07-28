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

export const initialState: AuthState = { user: null };

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return { ...state, user: action.payload };
    }

    case AuthActionTypes.LoginFailed: {
      return { ...state, user: { id: null } };
    }

    default:
      return state;
  }
}

export const selectAuthUser = (state: AuthState) => state.user;
export const selectIsLoggedIn = createSelector(selectAuthUser, user => !!user);
