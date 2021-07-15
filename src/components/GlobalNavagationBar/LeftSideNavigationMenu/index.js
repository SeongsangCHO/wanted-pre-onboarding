import React from "react";
import PropTypes from "prop-types";
import { Wrapper, MenuList } from "./style";
const leftMenuItems = [
  {
    id: 1,
    title: "탐색",
    kind: "explore",
    xsView: true,
  },
  {
    id: 2,
    title: "커리어 성장",
    kind: "career",
    xsView: true,
  },
  {
    id: 3,
    title: "직군별 연봉",
    kind: "salary",
    xsView: false,
  },
  {
    id: 4,
    title: "이력서",
    kind: "essay",
    xsView: false,
  },
  {
    id: 5,
    title: "매치업",
    kind: "matchUp",
    xsView: false,
  },
  {
    id: 6,
    title: "프리랜서",
    kind: "free",
    xsView: false,
  },
  {
    id: 7,
    title: "Ai 합격예측",
    kind: "aiExpect",
    xsView: false,
  },
];

const LeftSideNavigationMenu = (props) => {
  return (
    <Wrapper>
      <MenuList className="leftSideNavMenu">
        <li className="xsOnly">
          <a href="/main" data-kind="home">
            홈
          </a>
        </li>
        {leftMenuItems.map((menuData) => {
          return (
            <li
              key={menuData.id}
              className={menuData.xsView ? "xsview" : "smview"}
            >
              <a href="/main" data-kind={menuData.kind}>
                {menuData.title}
              </a>
            </li>
          );
        })}
      </MenuList>
    </Wrapper>
  );
};

LeftSideNavigationMenu.propTypes = {};

export default LeftSideNavigationMenu;
