import { Injectable } from '@angular/core';
import { AuthServiceModel } from '../../../../nico-core/src';
import { empty } from 'rxjs';

@Injectable()
export class AuthService implements AuthServiceModel {
  constructor() {}

  login() {
    return empty();
  }

  logout() {
    return empty();
  }
}
