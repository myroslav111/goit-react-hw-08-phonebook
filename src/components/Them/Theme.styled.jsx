import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    & {
      /* position: absolute;
      top: 45px;
      left: 169px; */
    }
  }
`;

export const Sun = styled.span`
  color: var(--text);
  margin-right: 15px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #03e9f4;
  }
`;
export const Moon = styled.span`
  color: var(--text);
  cursor: pointer;
  &:hover {
    color: #03e9f4;
  }
`;
