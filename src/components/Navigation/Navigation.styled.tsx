import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const NavWrap = styled.nav`
  height: 50px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Rampart One", cursive;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  all: unset;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
  &:hover {
    color: #03e9f4;
  }
  &.active {
    color: green;
    font-size: 20px;
  }
`;
