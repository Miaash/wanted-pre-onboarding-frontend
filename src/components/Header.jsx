import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <MainWrapper>
      <HeaderContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HeaderTitle>
            <img src={Logo} alt="logo" />
            <span>pre-onboarding</span>
          </HeaderTitle>
        </Link>
      </HeaderContainer>
    </MainWrapper>
  );
};

export default Header;

const MainWrapper = styled.header`
  display: flex;
  position: relative;
  position: sticky;
  z-index: 10000;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: white;
  border-bottom: 0.5px #b8b8b8 solid;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 180px;
    height: 30px;
    margin-right: 10px;
  }
  color: #000;
  font-size: 32px;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;
