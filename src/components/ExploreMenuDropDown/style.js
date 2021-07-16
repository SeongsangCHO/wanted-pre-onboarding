import styled from "styled-components";

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  max-width: 1060px;
`;
export const Wrapper = styled.div`
  height: 0;
  transition: 0.5s;
  background-color: white;
  max-height: 625px;
`;
export const Presentation = styled.div`
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
  &.show ${Wrapper} {
    height: 625px;
  }
  &.show ${Content} {
    opacity: 1;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const ExploreMenuCategoryContainer = styled.div`
  overflow: hidden;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 0 0;
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
`;
