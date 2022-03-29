import React from "react";
import {
  BasketContainer,
  BasketCard,
  Products,
  IconMinus,
  ProductList,
  PriceBox,
  OrderBtn,
} from "./Basket.style";
import { deleteToBasket } from "../../actions";
import { connect } from "react-redux";
const Basket = (props) => {
  const renderList = () => {
    if (!props.basketList.length) return <h1>Empty Basket</h1>;
    return props.basketList.map((product, index) => (
      <Products key={product.id} index={index}>
        <div>
          {product.productName}
          {product.quantity > 1 && "s"}
        </div>
        <div>$ {product.unitPrice}</div>
        <div>{product.quantity}</div>
        <IconMinus onClick={() => props.deleteToBasket(product)} />
      </Products>
    ));
  };
  const price = () => {
    let totalPrice = 0;
    props.basketList.map((product) => {
      totalPrice += product.unitPrice * product.quantity;
      return null;
    });
    return totalPrice;
  };
  return (
    <BasketContainer>
      <BasketCard>
        <h1>Your Order</h1>
        <Products className="description">
          <div>Name</div>
          <div>Price</div>
          <div>Unit</div>
          <div></div>
        </Products>
        <ProductList> {renderList()}</ProductList>
        <PriceBox>Total Cost:{price()}</PriceBox>
        <OrderBtn>ORDER NOW</OrderBtn>
      </BasketCard>
    </BasketContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    basketList: state.basketList,
  };
};
export default connect(mapStateToProps, { deleteToBasket })(Basket);
