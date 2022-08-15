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

const persistConfigContact = {
  key: "filter",
  storage,
  whitelist: ["filter"],
};

const persistAuth = persistReducer(persistConfig, authSlice);
const persistContact = persistReducer(persistConfigContact, contactSlice);

export const store = configureStore({
  reducer: {
    auth: persistAuth,
    contacts: persistContact,
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
