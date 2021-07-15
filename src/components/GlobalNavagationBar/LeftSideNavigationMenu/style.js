import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;
export const MenuList = styled.ul`
  display: flex;
  height: 100%;
  flex: 1;
  margin: 0;
  font-size: 1em;
  font-weight: 600;
  justify-content: space-around;
  list-style: none;
  @media screen and (max-width: 768px) {
    justify-content: end;
  }
  & li {
    height: 100%;

    @media screen and (min-width: 768px) {
      &.xsOnly {
        display: none;
      }
    }
  }
  & a {
    padding: 15px;
    font-size: 14px;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    font-weight: 600;
    color: black;
    @media screen and (min-width: 768px) and (max-width: 974px) {
      padding-left: 0;
      padding-right: 0;
      font-size: 13px;
    }
  }
`;
