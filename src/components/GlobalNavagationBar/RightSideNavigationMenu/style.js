import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  & li.company-service-wrapper {
    display: flex;
    padding: 0;
    &::before {
      width: 1px;
      height: 10px;
      display: block;
      content: "";
      margin: auto 10px;
      background-color: black;
    }
    & a.company-service-btn {
      height: 30px;
      line-height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      margin-left: 15px;
      color: #666;
      font-size: 13px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  & li,
  & li > a {
    padding: 0 10px;
  }
  & button {
    background: none;
    cursor: pointer;
    border: none;
  }
  & img.right-menu-icon {
    width: 18px;
    height: 18px;
  }
  & div.profile-wrapper {
    width: 28px;
    height: 28px;
    cursor: pointer;
    & img.profile-image {
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      padding: 3px;
    }
  }
`;
