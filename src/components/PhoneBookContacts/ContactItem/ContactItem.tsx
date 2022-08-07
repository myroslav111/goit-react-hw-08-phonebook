import { Item, Name, Number, ButtonDelete } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { remove } from "../../../redux/reducers";
// import { connect } from "react-redux";
// import actions from "../../../redux/actions";

function ContactItem(props: any) {
  const { contact } = props;
  const dispatch = useDispatch();
  return (
    <Item key={contact.id}>
      <div>
        <Name> {contact.name}:</Name>
        <Number>{contact.number}</Number>
      </div>

      <ButtonDelete type="button" onClick={() => dispatch(remove(contact.id))}>
        delete
      </ButtonDelete>
    </Item>
  );
}

export default ContactItem;
/**----------------------------------------------------------- */
// function ContactItem(props: any) {
//   const { contact, onDeleteContact } = props;
//   return (
//     <Item key={contact.id}>
//       <div>
//         <Name> {contact.name}:</Name>
//         <Number>{contact.number}</Number>
//       </div>

//       <ButtonDelete type="button" onClick={() => onDeleteContact(contact.id)}>
//         delete
//       </ButtonDelete>
//     </Item>
//   );
// }

// const mapDispatchToProps = (dispatch: any) => ({
//   onDeleteContact: (id: string) => dispatch(actions.deleteData(id)),
// });

// export default connect(null, mapDispatchToProps)(ContactItem);
