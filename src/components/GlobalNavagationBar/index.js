import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchIcon from "../../assets/search.svg";
import Profile from "../../assets/nong.png";
import NotiIcon from "../../assets/bell.svg";
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
                <button>
                  <img
                    className="right-menu-icon"
                    src={SearchIcon}
                    alt="search button"
                  ></img>
                </button>
              </li>
              <li>
                <button>
                  <img
                    className="right-menu-icon"
                    src={NotiIcon}
                    alt="notification button"
                  ></img>
                </button>
              </li>
              <div className="profile-wrapper">
                <img className="profile-image" src={Profile}></img>
              </div>
              <li className="company-service-wrapper">
                <a className="company-service-btn">기업 서비스</a>
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
