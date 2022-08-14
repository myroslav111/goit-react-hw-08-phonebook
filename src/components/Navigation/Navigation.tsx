import { NavWrap, LinkTitle } from "./Navigation.styled";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
import AuthNav from "../AuthNav";

const Navigation = () => {
  return (
    <>
      <NavWrap>
        <LinkTitle to="/">
          <span>Phone book</span>
        </LinkTitle>
        <AuthNav />
      </NavWrap>
    </>
  );
};

// const Navigation = () => {
//   return (
//     <NavWrap>
//       <span>Phone book</span>
//       <Wrap>
//         <img
//           alt="GitHub"
//           width="32px"
//           src="https://w7.pngwing.com/pngs/718/70/png-transparent-bender-leela-philip-j-fry-computer-icons-symbol-bender-logo-cartoon-fictional-character-thumbnail.png"
//         />
//         <Link to="/">Add contacts</Link>
//         <Link to="/contacts">Contacts</Link>
//       </Wrap>
//     </NavWrap>
//   );
// };

export default Navigation;
