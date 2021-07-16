import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import LeftSideNavigationMenu from "./LeftSideNavigationMenu";
import { Wrapper, CenterAlignContainer, NavigationBar } from "./style";
import RightSideNavigationMenu from "./RightSideNavigationMenu";
import ExploreContent from "../ExploreMenuDropDown";

const GlobalNavationBar = (props) => {
  const { exploreItems, exploreTitleItems, leftMenuItems } = props;
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const handleExploreMenuMouseOver = (e) => {
    const { kind } = e.target.dataset;
    if (kind === "explore") {
      setIsMounted(true);
    }
    if (kind !== "logo" && kind !== "navBar" && kind !== "explore" && kind) {
      setIsMounted(false);
    }
  };

  useEffect(() => {
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      setShouldRender(false);
    }
  }, [isMounted]);
  return (
    <Wrapper className="gnb-wrapper">
      <CenterAlignContainer className="gnb-container">
        <NavigationBar
          onMouseOver={handleExploreMenuMouseOver}
          data-kind="navBar"
        >
          <div className="smview">
            <a data-kind="logo">wanted</a>
          </div>

          <LeftSideNavigationMenu
            leftMenuItems={leftMenuItems}
          ></LeftSideNavigationMenu>
          {isMounted && (
            <ExploreContent
              exploreItems={exploreItems}
              isOpen={shouldRender ? "show" : ""}
              data-kind="explore-content-presentation"
              exploreTitleItems={exploreTitleItems}
            ></ExploreContent>
          )}
          <RightSideNavigationMenu></RightSideNavigationMenu>
        </NavigationBar>
      </CenterAlignContainer>
    </Wrapper>
  );
};

GlobalNavationBar.propTypes = {
  exploreItems: PropTypes.array.isRequired,
  leftMenuItems: PropTypes.array.isRequired,
  exploreTitleItems: PropTypes.array,
};

export default GlobalNavationBar;
