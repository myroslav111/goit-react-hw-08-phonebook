import { nanoid } from "nanoid";
import types from "./actions-types";

interface IContactObj {
  id: string;
  name: string;
  number: string;
}

const addContacts = (value: IContactObj) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: nanoid(),
    // когда имя свойства и значения = тогда достаточно имя свойства
    name: value.name,
    number: value.number,
  },
});

const deleteData = (id: string) => ({
  type: types.DEL_CONTACT,
  payload: id,
});

const changeFilter = (value: string) => ({
  type: types.FILTER_CONTACTS,
  payload: value,
});

const actions: any = {
  addContacts: addContacts,
  deleteData: deleteData,
  changeFilter: changeFilter,
};

export default actions;
