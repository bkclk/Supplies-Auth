import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavItems,
  LogoLink,
  Logo,
  Basket,
  Icon,
  IconDown,
  IconUp,
  DropdownContainer,
  DropdownItem,
  MinusIcon,
  BasketEmpty,
  BasketLink,
  BasketItems,
  NavbarBtn,
} from "./Navbar.style";
import { deleteToBasket, clearToken, clearBasket } from "../../store/actions";
import { connect } from "react-redux";
const Navbar = (props) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdown] = useState(false);
  const dropdownRenderList = () => {
    if (!props.basketList.length) {
      return <BasketEmpty>Basket empty</BasketEmpty>;
    } else {
      return props.basketList.map((product) => (
        <DropdownItem key={product.id}>
          <MinusIcon onClick={() => props.deleteToBasket(product)} />
          <div>
            {product.quantity}- {product.productName}
            {product.quantity > 1 && "s"}
          </div>
        </DropdownItem>
      ));
    }
  };
  const dropDownItems = () => {
    return (
      <DropdownContainer>
        <BasketItems>{dropdownRenderList()}</BasketItems>
        <br />
        {props.basketList.length > 0 && (
          <BasketLink to="/basket" onClick={() => setDropdown(!dropdownOpen)}>
            Go To Basket
          </BasketLink>
        )}
      </DropdownContainer>
    );
  };
  const handleLogout = () => {
    localStorage.clear();
    props.clearToken();
    props.clearBasket();
    navigate("/");
  };
  return (
    <>
      <Nav>
        <NavItems>
          <LogoLink to="/">
            <Logo />
            <h1>SUPPLIES</h1>
          </LogoLink>
          {props.token.user === undefined ? (
            <Basket>
              <NavbarBtn onClick={() => navigate("login")}>Login</NavbarBtn>
              <NavbarBtn onClick={() => navigate("register")}>
                Register
              </NavbarBtn>
            </Basket>
          ) : (
            <Basket>
              <NavbarBtn onClick={handleLogout}>Log Out</NavbarBtn>
              <Icon />
              <h3>
                {props.basketList.length} Item
                {props.basketList.length > 1 && "s"}
              </h3>
              {!dropdownOpen ? (
                <IconDown onClick={() => setDropdown(!dropdownOpen)} />
              ) : (
                <IconUp onClick={() => setDropdown(!dropdownOpen)} />
              )}
            </Basket>
          )}
        </NavItems>
      </Nav>
      {dropdownOpen && dropDownItems()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    basketList: state.basketList,
    token: state.token,
  };
};
export default connect(mapStateToProps, { deleteToBasket, clearToken })(Navbar);
