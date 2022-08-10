import { configureStore } from "@reduxjs/toolkit";
import { inputReducer } from "./reducers";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: inputReducer,
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

/*-------------------------------------------------------------------------------- */
// import { persistStore } from "redux-persist";
// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducers from "./reducers";

// const rootReducer = combineReducers({
//   contact: reducers,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// // можно передать пред. состояние
// // const store = createStore(reducer, {prev.state});

// export default store;
