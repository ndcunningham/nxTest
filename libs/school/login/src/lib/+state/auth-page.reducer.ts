import { AuthPageActions, AuthPageLoginAction } from './auth-page.actions';
import { createSelector } from '../../../../../../node_modules/@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthPageModel {
  pending: boolean;
  error: any | null;
}

export interface AuthPageState {
  authPage: AuthPageModel | null;
}

export const initialState: AuthPageModel = {
  pending: false,
  error: null
};

export function authPageReducer(state = initialState, action: AuthPageActions | AuthActions) {
  switch (action.type) {
    case AuthPageLoginAction: {
      return { ...state, pending: true };
    }

    case AuthActionTypes.LoginSuccess: {
      return { ...state, pending: false, error: null };
    }

    case AuthActionTypes.LoginFailed: {
      return { ...state, pending: false, error: action.payload };
    }
    default:
      return state;
  }
}

export const selectAuthPage = (state: AuthPageState) => state.authPage;
export const selectPagePending = createSelector(selectAuthPage, page => page.pending);
export const selectPageError = createSelector(selectAuthPage, page => page.error);
export const selectPageHasError = createSelector(selectAuthPage, page => !!page.error);
