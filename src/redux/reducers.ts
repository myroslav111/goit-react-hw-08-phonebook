import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getContacts, addContact, deleteContact } from "./actions";
import { IContacts } from "../interface-ts/interface";


const contacts: IContacts = {
  items: [],
  filter: "",
  addLoader: false,
  loader: false,
  error: null,
};

const contactSlice = createSlice({
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



// Action creators are generated for each case reducer function
export const { filtered } = contactSlice.actions;

export default contactSlice.reducer;

export const getDataItem = (state: RootState) => state.contacts.items;
export const getDataFilter = (state: RootState) => state.contacts.filter;
export const getDataLoader = (state: RootState) => state.contacts.loader;
