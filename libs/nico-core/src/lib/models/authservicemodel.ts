import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * The base interface for any Authentication Service which will be using our shared
 * Authentication Module
 */
@Injectable()
export abstract class AuthServiceModel {
  /**
   * This function is used to log the user in
   */
  abstract login(...args): Observable<any>;

  /**
   * This function is used to log the user out
   */
  abstract logout(...args): Observable<any>;
}
