import React from "react";
import PropTypes from "prop-types";
import { ExploreMenuCategoryContainer } from "../style";

const ExploreMenuSubItems = (props) => {
  const { item } = props;

  return (
    <ExploreMenuCategoryContainer key={item.id}>
      <a>
        <h2>{item.title}</h2>
        <span className="arrow-right">{">"}</span>
      </a>
      {item.duties.map((duty, idx) => {
        return (
          <a key={duty + idx}>
            <h3>{duty}</h3>
          </a>
        );
      })}
      <a key={item.id + "moreInfoArrow"}>
        <h3>더보기</h3>
        <span className="arrow-right">{">"}</span>
      </a>
    </ExploreMenuCategoryContainer>
  );
};

ExploreMenuSubItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ExploreMenuSubItems;
