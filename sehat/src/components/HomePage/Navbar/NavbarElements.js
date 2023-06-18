import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: linear-gradient(45deg, #fff 15%, #236477 15%, #236477 100%);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 1000px) / 2;
  z-index: 100;
  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightblue;
    color: royalblue;
  }

  &:active {
    color: #15cdfc;
  }
`;

export const NavLogo = styled(Link)`
  padding-left: 2rem;
  cursor: pointer;
`;

export const Bar = styled.span`
  color: #fff;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightblue;
    color: royalblue;
  }
`;
