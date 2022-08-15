import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../interface-ts/interface";
import operations from "./auth-operations";
import { RootState } from "../store";

const authState: IInitialState = {
  user: { name: null, email: null },
  token: null,
  isLogIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
  extraReducers: {
    [operations.register.pending.type](state: any, _: any) {
      return { ...state, isLoading: true };
    },
    [operations.register.fulfilled.type](state: any, action: any) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogIn: true,
        isLoading: false,
      };
    },
    [operations.register.rejected.type](state: any, action: any) {
      return { ...state, error: action.payload, isLoading: false };
    },

    [operations.logIn.pending.type](state: any, _: any) {
      return { ...state, isLoading: true };
    },
    [operations.logIn.fulfilled.type](state: any, action: any) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogIn: true,
        isLoading: false,
      };
    },
    [operations.logIn.rejected.type](state: any, action: any) {
      return { ...state, error: action.payload, isLoading: false };
    },

    [operations.logOut.pending.type](state: any, _: any) {
      return { ...state, isLoading: true };
    },
    [operations.logOut.fulfilled.type](state: any, action: any) {
      return { ...state, ...authState };
    },
    [operations.logOut.rejected.type](state: any, action: any) {
      return { ...state, error: action.payload, isLoading: false };
    },
    [operations.getCurrentUser.pending.type](state: any) {
      return {
        ...state,
        isFetchingCurrentUser: true,
      };
    },
    [operations.getCurrentUser.fulfilled.type](state: any, action: any) {
      return {
        ...state,
        user: action.payload,
        isLogIn: true,
        isFetchingCurrentUser: false,
      };
    },
    [operations.getCurrentUser.rejected.type](state: any, action: any) {
      return {
        ...state,
        error: action.payload,
        isFetchingCurrentUser: false,
      };
    },
  },
});

export const getIsLogIn = (state: RootState) => state.auth.isLogIn;
export const getUserName = (state: RootState) => state.auth.user.name;

export default authSlice.reducer;
