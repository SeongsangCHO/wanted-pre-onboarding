import React from "react";
import PropTypes from "prop-types";
import { ExploreMenuCategoryContainer } from "../style";

const ExploreMenuOnlyTitles = (props) => {
  const { exploreTitleItems } = props;

  return (
    <ExploreMenuCategoryContainer>
      {exploreTitleItems?.map((item) => {
        return (
          <a key={item + "title"}>
            <h2>{item}</h2>
            <span className="arrow-right">{">"}</span>
          </a>
        );
      })}
    </ExploreMenuCategoryContainer>
  );
};

ExploreMenuOnlyTitles.propTypes = {
  exploreTitleItems: PropTypes.array,
};

export default ExploreMenuOnlyTitles;
