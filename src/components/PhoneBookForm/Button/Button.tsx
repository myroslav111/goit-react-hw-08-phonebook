import React from "react";
import { ButtonSubmit } from "./Button.styled";
import { useTranslation } from "react-i18next";

const Button = () => {
  const { t } = useTranslation();
  return (
    <ButtonSubmit type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {t("add")}
    </ButtonSubmit>
  );
};

export default Button;
