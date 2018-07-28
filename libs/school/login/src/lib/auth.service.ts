import { Injectable } from '@angular/core';
import { AuthServiceModel } from '../../../../nico-core/src';
import { of, empty, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AuthService implements AuthServiceModel {
  constructor() {}

  login(state, user) {
    if (user.username !== 'nico') return throwError('Invalid username or password');
    return of({ name: 'nico', id: 1 }).pipe(delay(4000));
  }

  logout() {
    return empty();
  }
}
