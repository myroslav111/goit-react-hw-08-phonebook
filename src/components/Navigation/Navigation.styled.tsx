import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const NavWrap = styled.nav`
  height: 50px;
  margin-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;
  /* color: white; */
  color: var(--text);
  /* background-color: gray; */
  background-color: var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Rampart One", cursive;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  @media screen and (max-width: 500px) {
    & {
      font-size: 12px;
    }
  }
`;

export const Link = styled(NavLink)`
  all: unset;
  cursor: pointer;
  /* &:not(:last-of-type) {} */
  margin-right: 15px;

  &:hover {
    color: #03e9f4;
  }
  &.active {
    color: green;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-right: 7px;
    }
  }
`;

export const LinkTitle = styled(NavLink)`
  all: unset;
  cursor: pointer;
  /* &:not(:last-of-type) {
    margin-right: 15px;
  }

  &.active {
    color: green;
    font-size: 20px;
  } */
  &:hover {
    color: #03e9f4;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
    border-radius: 8px;
  }
`;

export const Greetings = styled.span`
  /* margin-right: 15px; */
  font-family: "The Nautigal", cursive;
  color: inherit;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    & {
      font-size: 5px;
    }
  }
`;

export const Exit = styled.span`
  /* margin-right: 15px; */
  /* font-family: "The Nautigal", cursive; */
  color: green;
  font-size: 30px;
  cursor: pointer;
  margin-left: 10px;
  padding-top: 8px;

  &:hover {
    color: #03e9f4;
  }
`;
