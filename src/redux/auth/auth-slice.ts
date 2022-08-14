import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../interface-ts/interface";
import operations from "./auth-operations";

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
  },
});

export default authSlice.reducer;
