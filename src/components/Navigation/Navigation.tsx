import { NavWrap, Link } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavWrap>
      <span>Phone book</span>
      <div>
        <Link to="/">Add contacts</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </NavWrap>
  );
};

export default Navigation;
