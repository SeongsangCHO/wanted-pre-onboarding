import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: tomato;
`;
export const CenterAlignContainer = styled.div`
  width: 90%;
  height: 50px;
  max-width: 1060px;
  margin: 0 auto;
`;
export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  font-size: 14px;
  width: 100%;
  height: 50px;
`;

export const LeftMenuList = styled.ul`
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

export const RightMenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  & li.company-service-wrapper {
    display: flex;
    padding: 0;
    &::before {
      width: 1px;
      height: 10px;
      display: block;
      content: "";
      margin: auto 10px;
      background-color: black;
    }
    & a.company-service-btn {
      height: 30px;
      line-height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      margin-left: 15px;
      color: #666;
      font-size: 13px;
      font-weight: 400;
    }
  }
  & li,
  & li > a {
    padding: 0 10px;
  }
  & img.right-menu-icon {
    width: 18px;
    height: 18px;
  }
`;
