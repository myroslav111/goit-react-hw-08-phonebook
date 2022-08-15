import styled from "@emotion/styled";

export const Text = styled.div`
  /* color: #fffbf1; */
  color: rgb(237, 237, 237);
  color: #2e2e31;
  text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
  font-size: 80px;
  font-family: "Rampart One", cursive;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media screen and (max-width: 500px) {
    & {
      font-size: 40px;
    }
  }

  &:before,
  &:after {
    content: "";
    padding: 0.9em 0.4em;
    position: absolute;
    left: 50%;
    width: 100%;
    top: 50%;
    display: block;
    border: 15px solid red;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    animation: 10s infinite alternate ease-in-out tipsy;

    @media screen and (max-width: 500px) {
      & {
        border: 10px solid red;
      }
    }
  }

  &:before {
    border-color: #d9524a #d9524a rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    z-index: -1;
  }

  &:after {
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #d9524a #d9524a;
    box-shadow: 25px 25px 25px rgba(46, 46, 49, 0.8);
  }
`;
