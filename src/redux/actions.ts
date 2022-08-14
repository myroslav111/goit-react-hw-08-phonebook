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
