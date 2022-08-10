import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
  width: 100%;
  justify-content: space-between;
  margin: 6px 0 6px 0;
  cursor: pointer;
  border-radius: 8px;
  background-color: white;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    padding: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 10px;
    border-radius: 8px;
  }
`;

export const ButtonDelete = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 25px;
  color: black;
  padding: 0;
  width: 70px;
  height: 30px;
  border: 2px solid #888888;
  outline: none;
  background-color: #f4f5f6;
  border-radius: 8px;
  box-shadow: -6px -20px 35px #ffffff, -6px -10px 15px #ffffff,
    -20px 0px 52px #ffffff, 2px 3px 6px rgb(0 0 0 / 89%);
  transition: 0.13s ease-in-out;
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  z-index: 1;
  &:hover {
    animation: animate 8s linear infinite;
  }
  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 8px;
    opacity: 0;
    transition: 0.5s;
  }
  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
`;

export const Name = styled.span`
  font-size: 30px;
  margin-right: 10px;
  @media screen and (max-width: 500px) {
    & {
      font-size: 20px;
    }
  }
`;

export const Number = styled.span`
  font-size: 30px;
  @media screen and (max-width: 500px) {
    & {
      font-size: 20px;
    }
  }
`;
