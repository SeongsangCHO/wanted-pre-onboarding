import React from "react";
import PropTypes from "prop-types";
import { Wrapper, MenuList } from "./style";

const LeftSideNavigationMenu = (props) => {
  const { leftMenuItems } = props;
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

LeftSideNavigationMenu.propTypes = {
  leftMenuItems: PropTypes.array.isRequired,
};

export default LeftSideNavigationMenu;
