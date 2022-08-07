interface Person {
  [x: string]: string;
}

const types: Person = {
  ADD_CONTACT: "contacts/data",
  DEL_CONTACT: "delete/data",
  FILTER_CONTACTS: "filter/data",
};

export default types;
