import styled from "@emotion/styled";

export const ButtonSubmit = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: relative;
  display: inline-block;
  padding: 15px 10px;
  margin: 40px 0;
  font-size: 24px;
  text-decoration: none;
  /* text-transform: uppercase; */
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
  /* background: #0052fe; */
  background-color: rgb(237, 237, 237);
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
  -webkit-box-reflect: below -3px linear-gradient(transparent, #0005);
  color: black;
  &:hover {
    background-color: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
  & span {
    position: absolute;
    display: block;
  }
  & span:nth-of-type(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, grey);
    animation: animation1 1s linear infinite;
    animation-delay: 0.25s;
  }
  & span:nth-of-type(2) {
    top: -100;
    right: 0%;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, grey);
    animation: animation2 1s linear infinite;
    animation-delay: 0.25s;
  }
  & span:nth-of-type(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, grey);
    animation: animation3 1s linear infinite;
    animation-delay: 0.5s;
  }
  & span:nth-of-type(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, grey);
    animation: animation4 1s linear infinite;
    animation-delay: 0.75s;
  }
`;
