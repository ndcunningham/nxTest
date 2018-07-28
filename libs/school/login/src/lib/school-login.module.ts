import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './+state';
import { AuthEffects } from './+state/auth.effects';

import { LoginViewComponent } from './login-view/login-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthServiceModel } from '../../../../nico-core/src';
import { AuthService } from './auth.service';
import { MaterialModule } from '@sampleWorkspace/material';

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
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginViewComponent, LoginPageComponent],
  providers: [AuthEffects, { provide: AuthServiceModel, useClass: AuthService }]
})
export class SchoolLoginModule {}
