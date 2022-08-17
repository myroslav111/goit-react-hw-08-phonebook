import { ListWraper, BoxList } from "./PhoneBookContacts.styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";
import "./animations/animation.css";
import { getDataItem, getDataFilter } from "../../redux/reducers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getContacts } from "../../redux/actions";
// import { getIsLogIn } from "../../redux/auth/auth-slice";
// import operations from "../../redux/auth/auth-operations";

function PhoneBookContacts() {
  const arrContacts = useSelector(getDataItem);
  const filteredString = useSelector(getDataFilter);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // отфильтрованый масив контактов отвечающий поиску
  const getVisibleContact = (allContact: Object[], filter: string) => {
    const normalizeFilter = filter.toLowerCase();
    return allContact.filter((contact: any) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filtered = getVisibleContact(arrContacts, filteredString);

  return (
    <BoxList>
      <TransitionGroup component={ListWraper}>
        {filtered.map((contact: any) => (
          <CSSTransition key={contact.id} timeout={250} classNames="fade">
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </BoxList>
  );
}

export default PhoneBookContacts;
