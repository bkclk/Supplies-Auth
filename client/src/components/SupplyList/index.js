import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import {
  Container,
  ListContainer,
  ListItem,
  AddIcon,
} from "./SupplyList.style";
import { connect } from "react-redux";
import { getProducts, addToBasket } from "../../store/actions";

const SupplyList = (props) => {
  useEffect(() => {
    props.getProducts(props.token.token);
  }, []);
  const handleClick = (product) => {
    if (props.basketList.find((p) => p.id === product.id)) {
      if (product.quantity === product.unitsInStock) {
      } else {
        product.quantity += 1;
        props.addToBasket(product);
      }
    } else {
      product.quantity = 1;
      props.addToBasket(product);
    }
  };
  const renderList = () => {
    if (!props.selectedCat.id) {
      return <h2>Please Select a Category </h2>;
    } else {
      const selectedList = props.productList.filter(
        (product) => product.categoryId === props.selectedCat.id
      );
      return selectedList.map((product) => {
        if (product.unitsInStock === 0) {
          return null;
        }
        return (
          <ListItem key={product.id}>
            <div className="title">{product.productName}</div>
            <div>{product.quantityPerUnit}</div>
            <div>{product.unitsInStock}</div>
            <div>{product.unitPrice} $</div>
            <AddIcon onClick={() => handleClick(product)} />
          </ListItem>
        );
      });
    }
  };

  return (
    <Container>
      <Sidebar />
      <ListContainer>
        <ListItem>
          <div>Product Name</div>
          <div>Quantity Per Unit</div>
          <div>Stock</div>
          <div>Unit Price</div>
        </ListItem>
        {renderList()}
      </ListContainer>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedCat: state.selectedCat,
    productList: state.productList,
    basketList: state.basketList,
    token: state.token,
  };
};
export default connect(mapStateToProps, { getProducts, addToBasket })(
  SupplyList
);
