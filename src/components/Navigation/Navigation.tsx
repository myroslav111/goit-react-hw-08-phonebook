import { NavWrap, LinkTitle } from "./Navigation.styled";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
import AuthNav from "../AuthNav";
import UserNav from "../UserNav";
import { getIsLogIn } from "../../redux/auth/auth-slice";
import { useSelector } from "react-redux";
import Them from "../Them/Them";
import SimpleSelect from "../SelectMatirial/SelectMatirial";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const isLogIn = useSelector(getIsLogIn);
  const { t } = useTranslation();
  return (
    <>
      <NavWrap>
        <LinkTitle to="/">
          <span>{t("phonebook")}</span>
        </LinkTitle>
        <Them />
        <SimpleSelect />
        {isLogIn ? <UserNav /> : <AuthNav />}
      </NavWrap>
    </>
  );
};

export default Navigation;
