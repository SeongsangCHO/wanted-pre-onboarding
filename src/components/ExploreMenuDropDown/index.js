import React from "react";
import PropTypes from "prop-types";
import ExploreMenuSubItems from "./ExploreMenuSubItems";
import ExploreMenuOnlyTitles from "./ExploreMenuOnlyTitles";
import { Presentation, Wrapper, Content, Container } from "./style";

const ExploreContent = (props) => {
  const { exploreItems, exploreTitleItems, isOpen } = props;
  return (
    <Presentation className={isOpen ? "show" : ""}>
      <Wrapper>
        <Content>
          <Container>
            {exploreItems.map((item) => {
              return (
                <ExploreMenuSubItems
                  key={item.id}
                  item={item}
                ></ExploreMenuSubItems>
              );
            })}
            <ExploreMenuOnlyTitles
              exploreTitleItems={exploreTitleItems}
            ></ExploreMenuOnlyTitles>
          </Container>
        </Content>
      </Wrapper>
    </Presentation>
  );
};

ExploreContent.propTypes = {
  exploreItems: PropTypes.array.isRequired,
  exploreTitleItems: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
};

export default ExploreContent;
