import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "./store";
import { getContacts, addContact, deleteContact } from "./actions";
import { IContacts } from "../interface-ts/interface";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["items"],
};

const contacts: IContacts = {
  items: [],
  filter: "",
  addLoader: false,
  loader: false,
  error: null,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    filtered: (state: any, action: PayloadAction<string>) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [getContacts.pending.type]: (state: any, _: any) => ({
      ...state,
      loader: true,
    }),
    [getContacts.fulfilled.type]: (state: any, { payload }) => ({
      ...state,
      items: payload,
      loader: false,
    }),
    [getContacts.rejected.type]: (state: any, { payload }) => ({
      ...state,
      error: payload,
      loader: false,
    }),

    [addContact.pending as any]: (state: any, _: any) => ({
      ...state,
      addLoader: true,
    }),
    [addContact.fulfilled as any]: (state: any, { payload }) => ({
      ...state,
      items: [payload, ...state.items],
      addLoader: false,
    }),
    [addContact.rejected as any]: (state: any, { payload }) => ({
      ...state,
      error: payload,
      addLoader: false,
    }),

    [deleteContact.pending.type]: (state: any, _: any) => ({
      ...state,
      loader: true,
    }),
    [deleteContact.fulfilled.type]: (state: any, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }: any) => id !== payload),
      loader: false,
    }),
    [deleteContact.rejected.type]: (state: any, { payload }) => ({
      ...state,
      error: payload,
      loader: false,
    }),
  },
});

export const inputReducer: any = persistReducer<RootState>(
  persistConfig,
  contactSlice.reducer
);

// Action creators are generated for each case reducer function
export const { filtered } = contactSlice.actions;

export const getDataItem = (state: RootState) => state.items;
export const getDataFilter = (state: RootState) => state.filter;
export const getDataLoader = (state: RootState) => state.addLoader;
/**----------------------------------------------------------------------------- */
// import { getContact } from "../service/api";
// import { combineReducers } from "redux";
// import types from "./actions-types";
// import contactReducer from "../redux/reducers";
// export const contactSlice: any = createSlice({
//   name: "contact",
//   initialState: contacts,
//   reducers: {
//     add: (state, action: PayloadAction<IContactObj>) => {
//       state.items.push(action.payload);
//     },
//     remove: (state: any, action: PayloadAction<string>) => {
//       return {
//         ...state,
//         items: state.items.filter(
//           (contact: any) => contact.id !== action.payload
//         ),
//       };
//     },
//     filtered: (state: any, action: PayloadAction<string>) => {
//       return { ...state, filter: action.payload };
//     },
//   },
// });

// export const { add, remove, filtered } = contactSlice.actions;
/**----------------------------------------------------------- */
// // const initialContacts =
// const items = (state: Object[] = contacts.items, { type, payload }: any) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     case types.DEL_CONTACT:
//       return state.filter((contact: any) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterData = (
//   state: string = contacts.filter,
//   { type, payload }: any
// ) => {
//   switch (type) {
//     case types.FILTER_CONTACTS:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filterData,
// });
/*------------------------------------------------------------------------------- */
