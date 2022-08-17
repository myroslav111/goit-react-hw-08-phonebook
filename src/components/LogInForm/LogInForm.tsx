import { FormAuth } from "../AuthForm/AuthForm.styled";
import type { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IDataToPost } from "../../interface-ts/interface";
import operations from "../../redux/auth/auth-operations";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  // записываем значение инпута по name
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };
  // при сабмите отправляем в App данные для создания обьекта контакта
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData: IDataToPost = { email, password };
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    formData.email = target.email.value;
    formData.password = target.password.value;
    console.log(formData);
    dispatch(operations.logIn(formData));
    navigate("/add-contacts");

    reset();
  };

  // очищаем инпуты
  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <FormAuth autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div>
          <h1>{t("login")}</h1>
        </div>
        <div className="control block-cube block-input">
          <input
            name="email"
            placeholder={t("email")}
            type="email"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            title="Input corect Email"
            required
            value={email}
            onChange={handleChange}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            name="password"
            placeholder={t("password")}
            type="password"
            value={password}
            onChange={handleChange}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <button className="btn block-cube block-cube-hover" type="submit">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">{t("login")}</div>
        </button>
      </FormAuth>
    </>
  );
}

export default LogInForm;
