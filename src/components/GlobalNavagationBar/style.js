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

export const ExploreContentPresentation = styled.div`
  width: 100%;
  position: fixed;
  top: 50px;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.5s;
  height: 0;
  left: 0;
  &.show {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
  }
  &.show div.explore-content-wrapper {
    height: 625px;
  }
`;
export const ExploreContentWrapper = styled.div`
  height: 0;
  transition: 0.5s;
  background-color: aqua;
  max-height: 625px;
`;
export const ExploreContent = styled.div``;
export const ExploreTable = styled.div``;
