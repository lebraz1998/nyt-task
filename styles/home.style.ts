import styled from "styled-components";

export const HomeStyled = styled.div`
  padding: 10px;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  h1 {
    font-size: 25pt;
  }
`;
export const ModalStyled = styled.div`
  > div {
    padding: 30px;
    max-width: 100%;

    h6 {
      font-size: 12pt;
      opacity: 0.8;
      font-family: "Courier New", Courier, monospace;
      text-align: right;
    }
  }
  img {
    width: 450px;
  }

  @media (max-width: 1150px) {
    img {
      width: 350px;
    }
  }
`;
