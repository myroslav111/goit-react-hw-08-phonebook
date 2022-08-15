import { NavWrap, LinkTitle } from "./Navigation.styled";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
import AuthNav from "../AuthNav";
import UserNav from "../UserNav";
import { useSelector } from "react-redux";
import { getIsLogIn } from "../../redux/auth/auth-slice";

const Navigation = () => {
  const isLogIn = useSelector(getIsLogIn);
  return (
    <>
      <NavWrap>
        <LinkTitle to="/">
          <span>Phone book</span>
        </LinkTitle>
        {isLogIn ? <UserNav /> : <AuthNav />}
      </NavWrap>
    </>
  );
};

export default Navigation;
