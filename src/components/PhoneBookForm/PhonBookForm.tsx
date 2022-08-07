import Button from "./Button";
import InputName from "./InputName";
import InputNumber from "./InputNumber";
import { Form } from "./PhoneBookForm.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { add } from "../../redux/reducers";
import { IContactObj } from "../../redux/reducers";
import { toast } from "react-toastify";
import { getDataItem } from "../../redux/reducers";

// import actions from "../../redux/actions";
// import { connect } from "react-redux";
// import type { RootState } from "../../redux/store";

function FormPhonebook() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getDataItem);

  // const count = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  // записываем значение инпута по name
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // при сабмите отправляем в App данные для создания обьекта контакта
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData: IContactObj = { name, number, id: "" };
    const target = e.target as typeof e.target & {
      name: { value: string };
      number: { value: string };
    };
    formData.name = target.name.value;
    formData.number = target.number.value;
    formData.id = nanoid();
    const boolean = contacts.some(
      (nameContact: any) => formData.name === nameContact.name
    );
    if (boolean) {
      toast.error("already has");
      reset();
      return;
    }
    dispatch(add(formData));
    toast.success("success");
    reset();
  };

  // очищаем инпуты
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputName value={name} onChange={handleChange} />
      <InputNumber value={number} onChange={handleChange} />
      <Button />
    </Form>
  );
}

export default FormPhonebook;

/**----------------------------------------------------------------------------- */
// interface IFormData {
//   name: string;
//   number: string;
//   id?: string;
// }
// function FormPhonebook(props: any) {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   // записываем значение инпута по name
//   const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;

//       case "number":
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };
//   // при сабмите отправляем в App данные для создания обьекта контакта
//   const handleSubmit = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     const formData: IFormData = { name, number };
//     const target = e.target as typeof e.target & {
//       name: { value: string };
//       number: { value: string };
//     };
//     formData.name = target.name.value;
//     formData.number = target.number.value;
//     props.submit(formData);
//     reset();
//   };

//   // очищаем инпуты
//   const reset = () => {
//     setName("");
//     setNumber("");
//   };
//   return (
//     <Form onSubmit={handleSubmit}>
//       <InputName value={name} onChange={handleChange} />
//       <InputNumber value={number} onChange={handleChange} />
//       <Button />
//     </Form>
//   );
// }

// const mapDispathToProps = (dispatch: any) => ({
//   submit: (formData: IFormData) => dispatch(actions.addContacts(formData)),
// });

// export default connect(null, mapDispathToProps)(FormPhonebook);
/*------------------------------------------------------------------------------------- */
