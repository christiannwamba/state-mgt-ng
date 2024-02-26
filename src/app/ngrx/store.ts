import { createAction, createReducer, createSelector, on } from '@ngrx/store';

export const loginAction = createAction('[Auth] Login');
export const logoutAction = createAction('[Auth] Logout');

export type StoreState = {
  auth: {
    isLoggedIn: boolean;
  };
};

export const AuthReducer = createReducer(
  { isLoggedIn: false },
  on(loginAction, (state) => {
    return { ...state, isLoggedIn: true };
  }),
  on(logoutAction, (state) => {
    return { ...state, isLoggedIn: false };
  })
);

export const isLoggedInSelector = createSelector(
  (state: StoreState) => state.auth,
  (auth) => auth.isLoggedIn
);
