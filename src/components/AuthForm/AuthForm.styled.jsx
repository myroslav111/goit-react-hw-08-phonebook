import styled from "@emotion/styled";

export const FormAuth = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  color: white;
  /* background: white; */
  background-color: #212121;
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
  border-radius: 8px;
  font-family: "Rampart One", cursive;
  position: relative;

  &:before,
  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 25px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 35px 20px #777;
    -moz-box-shadow: 0 35px 20px #777;
    box-shadow: 0 35px 20px #777;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    -o-transform: rotate(-8deg);
    -ms-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }
  &:after {
    -webkit-transform: rotate(8deg);
    -moz-transform: rotate(8deg);
    -o-transform: rotate(8deg);
    -ms-transform: rotate(8deg);
    transform: rotate(8deg);
    right: 10px;
    left: auto;
  }
`;
