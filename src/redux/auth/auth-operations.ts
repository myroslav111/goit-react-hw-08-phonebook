import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IDataToPost } from "../../interface-ts/interface";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials: IDataToPost) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      toast.success("success!");
      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

const operations = {
  register,
};

export default operations;
