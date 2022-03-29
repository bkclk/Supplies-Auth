import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import {
  AiFillCaretDown,
  AiOutlineMinusCircle,
  AiFillCaretUp,
} from "react-icons/ai";

export const Nav = styled.nav`
  background-color: darkred;
  height: 70px;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
export const NavItems = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;

  h1 {
    align-self: center;
  }
`;
export const LogoLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
`;
export const Logo = styled(MdOutlineFoodBank)`
  margin-right: 5px;
  font-size: 3rem;
`;
export const Basket = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  h3 {
    padding-top: 8px;
  }
`;
export const Icon = styled(BsBasket)`
  margin-right: 8px;
  font-size: 2rem;
`;
export const IconDown = styled(AiFillCaretDown)`
  align-self: center;
  margin-top: 5px;
  margin-left: 4px;
  cursor: pointer;
`;
export const IconUp = styled(AiFillCaretUp)`
  align-self: center;
  margin-top: 5px;
  margin-left: 4px;
  cursor: pointer;
`;
export const DropdownContainer = styled.div`
  z-index: 10;
  background-color: white;
  border-radius: 1rem;
  position: absolute;
  right: 0;
  top: 4rem;
  color: darkred;
  font-weight: 700;
`;
export const DropdownItem = styled.div`
  padding: 0px 10px;
  display: flex;
`;
export const MinusIcon = styled(AiOutlineMinusCircle)`
  padding-right: 2px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: darkred;
    color: #fff;
    border-radius: 2rem;
  }
`;
export const BasketEmpty = styled.div`
  padding: 0.5rem;
`;
export const BasketLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: darkred;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0.2rem;

  display: flex;
  border: white solid 2px;
  &:hover {
    color: yellow;
  }
  &:active {
    background-color: lightgrey;
    color: darkred;
  }
`;
export const BasketItems = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const NavbarBtn = styled.button`
  margin: 10px;
  border-radius: 1rem;
  padding: 5px 12px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: white;
    background-color: darkgrey;
  }
  &:active {
    background-color: #fff;
    color: darkred;
  }
`;
