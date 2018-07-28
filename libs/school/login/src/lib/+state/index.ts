import * as fromAuthPage from './auth-page.reducer';
import * as fromAuth from './auth.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  status: fromAuth.AuthState;
  loginPage: fromAuthPage.AuthPageState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.authReducer,
  loginPage: fromAuthPage.authPageReducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(selectAuthState, (state: AuthState) => state.status);

export const getLoggedIn = createSelector(selectAuthStatusState, fromAuth.selectIsLoggedIn);

export const getUser = createSelector(selectAuthStatusState, fromAuth.selectAuthUser);

export const selectLoginPageState = createSelector(selectAuthState, (state: AuthState) => state.loginPage);

export const selectPageHaserror = createSelector(selectLoginPageState, fromAuthPage.selectPageHasError);

export const getLoginPageError = createSelector(selectLoginPageState, fromAuthPage.selectPageError);

export const getLoginPagePending = createSelector(selectLoginPageState, fromAuthPage.selectPagePending);
