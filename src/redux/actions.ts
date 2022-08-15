import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContactObj } from "../interface-ts/interface";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (contact: IContactObj) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",

  async (id: string) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/edit",
  async ({ id, name, number }: any) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error: any) {
      console.log(error);
      return error.message;
    }
  }
);
