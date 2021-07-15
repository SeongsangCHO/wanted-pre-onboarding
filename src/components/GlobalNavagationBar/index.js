import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import LeftSideNavigationMenu from "./LeftSideNavigationMenu";
import {
  Wrapper,
  CenterAlignContainer,
  NavigationBar,
  ExploreContentPresentation,
  ExploreContentWrapper,
  ExploreContent,
} from "./style";
import RightSideNavigationMenu from "./RightSideNavigationMenu";
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
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const handleExploreMenuMouseOver = (e) => {
    const { kind } = e.target.dataset;
    if (kind === "explore") {
      setIsMounted(true);
    }
    if (kind !== "home" && kind !== "navBar" && kind !== "explore" && kind) {
      setIsMounted(false);
    }
    console.log(kind, "over");
  };

  useEffect(() => {
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      setShouldRender(false);
    }
  }, [isMounted]);
  return (
    <Wrapper>
      <CenterAlignContainer>
        <NavigationBar
          onMouseOver={handleExploreMenuMouseOver}
          data-kind="navBar"
        >
          <div>
            <a data-kind="home">logo</a>
          </div>
          <LeftSideNavigationMenu></LeftSideNavigationMenu>
          {isMounted && (
            <ExploreContentPresentation className={shouldRender ? "show" : ""}>
              <ExploreContentWrapper>
                <ExploreContent>
                  <ul>
                    <li>테이블1</li>
                    <li>테이블1</li>
                    <li>테이블1</li>
                    <li>테이블1</li>
                  </ul>
                </ExploreContent>
              </ExploreContentWrapper>
            </ExploreContentPresentation>
          )}
          <RightSideNavigationMenu></RightSideNavigationMenu>
        </NavigationBar>
      </CenterAlignContainer>
    </Wrapper>
  );
};

GlobalNavationBar.propTypes = {};

export default GlobalNavationBar;
