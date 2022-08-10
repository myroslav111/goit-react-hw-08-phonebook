import api from "../service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContactObj } from "../interface-ts/interface";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    try {
      const response = await api.getContact();
      return response;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (contact: IContactObj) => {
    try {
      const response = await api.addContact(contact);
      return response;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",

  async (id: string) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (error: any) {
      return error.message;
    }
  }
);
/**--------------------------------------------------- */
// import { nanoid } from "nanoid";
// import types from "./actions-types";

// import { AppDispatch } from "./store";
// export const fetchContactRequest = createAction("contact/fetchContactRequest");

// export const fetchContactSuccess: any = createAction(
//   "contact/fetchContactSuccess"
// );

// export const fetchContactError = createAction("contact/fetchContactError");

// const fetchContacts = createAsyncThunk();

// export const fetchContact = () => async (dispatch: AppDispatch) => {
//   dispatch(fetchContactRequest());

//   try {
//     const contacts = await getContact();
//     dispatch(fetchContactSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactError());
//   }
// };
/**----------------------------------------------------------------------------------------- */

// const addContacts = (value: IContactObj) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: nanoid(),
//     // когда имя свойства и значения = тогда достаточно имя свойства
//     name: value.name,
//     number: value.number,
//   },
// });

// const deleteData = (id: string) => ({
//   type: types.DEL_CONTACT,
//   payload: id,
// });

// const changeFilter = (value: string) => ({
//   type: types.FILTER_CONTACTS,
//   payload: value,
// });

// const actions: any = {
//   addContacts: addContacts,
//   deleteData: deleteData,
//   changeFilter: changeFilter,
// };

// export default actions;
