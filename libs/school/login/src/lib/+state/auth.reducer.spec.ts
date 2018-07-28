import { LoginSuccess } from './auth.actions';
import { authReducer, initialState } from './auth.reducer';

describe('authReducer', () => {
  it('should work', () => {
    const action: LoginSuccess = new LoginSuccess({});
    const actual = authReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
