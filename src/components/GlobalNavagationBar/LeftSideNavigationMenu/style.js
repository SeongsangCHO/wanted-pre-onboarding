import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  width: auto;
  justify-content: center;
  flex: 1;
  height: 100%;
  margin: 0;
  font-size: 1em;
  font-weight: 600;
  list-style: none;

  & li {
    width: fit-content;
    float: left;
    height: 100%;
  }
  & a {

    flex: 1;
    white-space: nowrap;
    padding: 15px;
    font-size: 14px;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    font-weight: 600;
    color: black;
  }
  @media screen and (max-width: 978px) {
    justify-content: space-around;
  }
`;
