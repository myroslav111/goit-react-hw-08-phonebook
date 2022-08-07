import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import contactReducer from "../redux/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "./store";

// import { combineReducers } from "redux";
// import types from "./actions-types";

export interface IContactObj {
  id: string;
  name: string;
  number: string;
}

interface IContacts {
  items: IContactObj[];
  filter: "";
}

const contacts: IContacts = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

export const contactSlice: any = createSlice({
  name: "contact",
  initialState: contacts,
  reducers: {
    add: (state, action: PayloadAction<IContactObj>) => {
      state.items.push(action.payload);
    },
    remove: (state: any, action: PayloadAction<string>) => {
      return {
        ...state,
        items: state.items.filter(
          (contact: any) => contact.id !== action.payload
        ),
      };
    },
    filtered: (state: any, action: PayloadAction<string>) => {
      return { ...state, filter: action.payload };
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const inputReducer: any = persistReducer<RootState>(
  persistConfig,
  contactSlice.reducer
);

// Action creators are generated for each case reducer function
export const { add, remove, filtered } = contactSlice.actions;

export const getDataItem = (state: RootState) => state.items;
export const getDataFilter = (state: RootState) => state.filter;
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
