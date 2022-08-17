import { Wrap, Link, Greetings, Exit } from "../Navigation/Navigation.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-slice";
import { BsDoorOpen } from "react-icons/bs";
import operations from "../../redux/auth/auth-operations";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const UserNav = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userName = useSelector(getUserName);
  const navigate = useNavigate();
  const exit = () => {
    dispatch(operations.logOut());
    navigate("/");
    // toast.success("LogOut!");
  };
  return (
    <>
      <Wrap>
        <Link to="/add-contacts">Add contacts</Link>
        <Link to="/contacts">Contacts</Link>
        <img
          alt="GitHub"
          width="32px"
          src="https://w7.pngwing.com/pngs/718/70/png-transparent-bender-leela-philip-j-fry-computer-icons-symbol-bender-logo-cartoon-fictional-character-thumbnail.png"
        />
        <Greetings>
          Hai, {userName}...
          <Exit onClick={exit}>
            <BsDoorOpen />
          </Exit>
        </Greetings>
      </Wrap>
    </>
  );
};

export default UserNav;
