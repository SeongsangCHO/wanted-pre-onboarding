import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchIcon } from "../../assets/search.svg";
import {
  Wrapper,
  CenterAlignContainer,
  NavigationBar,
  LeftMenuList,
  RightMenuList,
} from "./style";
const leftMenuItems = [
  {
    id: 1,
    title: "탐색",
    kind: "explore",
  },
  {
    id: 2,
    title: "커리어 성장",
    kind: "career",
  },
  {
    id: 3,
    title: "직군별 연봉",
    kind: "salary",
  },
  {
    id: 4,
    title: "이력서",
    kind: "essay",
  },
  {
    id: 5,
    title: "매치업",
    kind: "matchUp",
  },
  {
    id: 6,
    title: "프리랜서",
    kind: "free",
  },
  {
    id: 7,
    title: "Ai 합격예측",
    kind: "aiExpect",
  },
];

const GlobalNavationBar = (props) => {
  return (
    <Wrapper>
      <CenterAlignContainer>
        <NavigationBar>
          <div>
            <a>logo</a>
          </div>
          <div>
            <LeftMenuList>
              {leftMenuItems.map((menuData) => {
                return (
                  <li key={menuData.id}>
                    <a href="/main" data-kind={menuData.kind}>
                      {menuData.title}
                    </a>
                  </li>
                );
              })}
            </LeftMenuList>
          </div>
          <div></div>
          <aside>
            <RightMenuList>
              <li>
                <button>돋</button>
              </li>
              <li>
                <button>뭐</button>
              </li>
              <li>
                <button>뭐2</button>
              </li>
              <li className="company-service">
                <button>기업 서비스</button>
              </li>
            </RightMenuList>
          </aside>
        </NavigationBar>
      </CenterAlignContainer>
    </Wrapper>
  );
};

GlobalNavationBar.propTypes = {};

export default GlobalNavationBar;
