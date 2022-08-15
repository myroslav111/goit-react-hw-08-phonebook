import { NavWrap, LinkTitle } from "./Navigation.styled";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
import AuthNav from "../AuthNav";
import UserNav from "../UserNav";
import { getIsLogIn } from "../../redux/auth/auth-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import operations from "../../redux/auth/auth-operations";

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(operations.getCurrentUser(""));
  }, [dispatch]);

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
