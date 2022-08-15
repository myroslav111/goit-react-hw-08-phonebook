// import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

interface IContactObj {
  id?: string;
  name: string;
  number: string;
}

async function getContact() {
  // const { data }: any = await axios.get("/contacts");
  // console.log(data);
  // return data;
}

async function addContact(contact: IContactObj) {
  // const { data }: any = await axios.post("/contacts", contact);
  // console.log(data);
  // return data;
}

async function deleteContact(id: string) {
  // const response = await axios.delete(`/contacts/${id}`);
  // return response;
}

const api = {
  getContact: getContact,
  addContact: addContact,
  deleteContact: deleteContact,
};

export default api;
