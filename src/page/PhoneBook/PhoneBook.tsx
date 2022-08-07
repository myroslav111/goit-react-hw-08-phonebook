import SearchForm from "../../components/PhoneBookContacts/SearchForm";
import PhoneBookContacts from "../../components/PhoneBookContacts";
import { Container } from "./PhoneBook.styled";

const PhoneBook = () => {
  return (
    <Container>
      <SearchForm />
      <PhoneBookContacts />
    </Container>
  );
};

export default PhoneBook;
