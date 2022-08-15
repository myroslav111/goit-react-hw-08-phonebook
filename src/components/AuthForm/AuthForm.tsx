import { FormAuth } from "./AuthForm.styled";
import type { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IDataToPost } from "../../interface-ts/interface";
import operations from "../../redux/auth/auth-operations";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  // записываем значение инпута по name
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

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
    const formData: IDataToPost = { name, email, password };
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    formData.name = target.name.value;
    formData.email = target.email.value;
    formData.password = target.password.value;
    console.log(formData);
    dispatch(operations.register(formData));
    navigate("/add-contacts");
    reset();
  };

  // очищаем инпуты
  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <FormAuth className="form" autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div className="control block-cube block-input">
          <input
            name="name"
            placeholder="Username"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
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
            name="email"
            placeholder="Email"
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
            placeholder="Password"
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$"
            title="Minimum five characters, at least one letter and one number"
            required
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
          <div className="text">Sign Up</div>
        </button>
      </FormAuth>
    </>
  );
}

export default AuthForm;
