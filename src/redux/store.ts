import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/auth-slice";
import contactSlice from "./reducers";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const inputReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: inputReducer,
    contacts: contactSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
