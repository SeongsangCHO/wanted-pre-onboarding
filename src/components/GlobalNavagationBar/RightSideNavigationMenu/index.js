import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "../../../assets/search.svg";
import Profile from "../../../assets/nong.png";
import NotiIcon from "../../../assets/bell.svg";
import { MenuList } from "./style";

const RightSideNavigationMenu = (props) => {
  return (
    <aside>
      <MenuList>
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
      </MenuList>
    </aside>
  );
};

RightSideNavigationMenu.propTypes = {};

export default RightSideNavigationMenu;
