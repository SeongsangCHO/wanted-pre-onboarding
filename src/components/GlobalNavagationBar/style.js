import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
`;
export const CenterAlignContainer = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1060px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    & {
      margin: 0;
      padding-top: 4px;
      width: 100%;
    }
  }
`;
export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  height: 100%;
  & a[data-kind="logo"] {
    font-weight: bold;
    line-height: 12px;
    font-size: 24px;
    letter-spacing: -0.5px;
  }
`;

export const ExploreContent = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
`;
