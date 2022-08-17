import { Item, Name, Number, ButtonDelete } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/actions";
import type { AppDispatch } from "../../../redux/store";
import { useTranslation } from "react-i18next";

function ContactItem(props: any) {
  const { contact } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  return (
    <Item key={contact.id}>
      <div>
        <Name> {contact.name}:</Name>
        <Number>{contact.number}</Number>
      </div>

      <ButtonDelete
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        {t("delete")}
      </ButtonDelete>
    </Item>
  );
}

export default ContactItem;
