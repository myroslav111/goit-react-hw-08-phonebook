export interface IContactObj {
  id?: string;
  name: string;
  number: string;
}

export interface IContacts {
  items: IContactObj[];
  filter: "";
  addLoader?: boolean;
  loader?: boolean;
  error?: any;
}
