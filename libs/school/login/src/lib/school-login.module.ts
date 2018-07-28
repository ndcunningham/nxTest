import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer, initialState as authInitialState } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthServiceModel } from '../../../../nico-core/src';
import { AuthService } from './auth.service';

export const schoolLoginRoutes: Route[] = [
  {
    path: '',
    component: LoginPageComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('auth', authReducer, { initialState: authInitialState }),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginViewComponent, LoginPageComponent],
  providers: [AuthEffects, { provide: AuthServiceModel, useClass: AuthService }]
})
export class SchoolLoginModule {}
