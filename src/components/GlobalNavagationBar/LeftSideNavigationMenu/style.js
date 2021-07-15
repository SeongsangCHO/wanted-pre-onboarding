import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  height: 100%;
  flex: 1;
  margin: 0;
  font-size: 1em;
  font-weight: 600;
  justify-content: space-around;
  list-style: none;
  & li {
    height: 100%;
  }
  & a {
    padding: 15px;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    font-weight: 600;
    color: black;
  }
`;
