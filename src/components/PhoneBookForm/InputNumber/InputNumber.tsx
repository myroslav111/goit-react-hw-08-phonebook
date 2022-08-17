import { InputWrap, InputBook } from "../InputName/InputName.styled";
import { useTranslation } from "react-i18next";

const InputNumber = (props: any) => {
  const { value, onChange } = props;
  const { t } = useTranslation();

  return (
    <InputWrap>
      {t("number")}
      <InputBook
        type="tel"
        name="number"
        onChange={onChange}
        value={value}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </InputWrap>
  );
};

export default InputNumber;
