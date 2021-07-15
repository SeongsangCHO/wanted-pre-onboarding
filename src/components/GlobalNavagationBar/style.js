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
  &.show div.explore-content {
    opacity: 1;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const ExploreContentWrapper = styled.div`
  height: 0;
  transition: 0.5s;
  background-color: white;
  max-height: 625px;
`;
export const ExploreContent = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  & div.explore-content-table {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    & div.category.onlyTitle {
      height: 100%;
    }
    & div.category {
      overflow: hidden;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 40px 20px 0 0;
      height: 290px;
      & a {
        cursor: pointer;
        position: relative;
      }
      & span.arrow-right {
        position: absolute;
        display: inline;
        color: #999;
        top: 0;
        left: 100%;
        transform: translate(-100%, 0px);
      }
      & a > h2 {
        width: 100%;
        height: 100%;
        font-size: 17px;
        padding-bottom: 15px;
        padding-right: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      & h3 {
        width: 100%;
        height: 100%;
        font-size: 13px;
        color: #999;
        padding: 5px 20px 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;
export const ExploreTable = styled.div``;
