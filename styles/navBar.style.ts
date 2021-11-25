import styled from "styled-components";

export const NavBarStyled = styled.nav`
  color: white;
  top: 0;
  position: sticky;
  width: 100%;
  z-index: 1;
  align-items: center;

  font-family: "Courier New", Courier, monospace;
  > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
  }
  h1 {
    margin: 0px;

    width: 190px;
    align-items: center;
    font-size: 20pt;
    font-weight: 600;
  }
`;
