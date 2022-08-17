import { InputWrap, InputBook } from "./InputName.styled";
import { useTranslation } from "react-i18next";

const Input = (props: any) => {
  const { value, onChange } = props;
  const { t } = useTranslation();
  return (
    <InputWrap>
      {t("names")}
      <InputBook
        type="text"
        name="name"
        onChange={onChange}
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </InputWrap>
  );
};

export default Input;
