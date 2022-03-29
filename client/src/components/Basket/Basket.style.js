import styled from "styled-components";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const BasketContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
`;
export const BasketCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: darkred solid 10px;
  border-radius: 1rem;
  padding: 1rem;
  width: 80%;
  max-height: 80%;

  h1 {
    text-align: center;
    border-bottom: darkgray solid 5px;
    padding-bottom: 10px;
  }
  .description {
    padding: 0.5rem 0;
    font-size: 1.3rem;
  }
`;
export const ProductList = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Products = styled.div`
  display: grid;
  grid-template-columns: 7fr 2fr 2fr 0.5fr;
  font-weight: 700;
  padding: 5px;
  border-bottom: darkred solid 3px;
  background-color: ${({ index }) => (index % 2 === 0 ? "grey" : "white")};
  color: ${({ index }) => (index % 2 === 0 ? "white" : "black")};
`;
export const IconMinus = styled(AiOutlineMinusCircle)`
  font-size: 1.5rem;
  color: darkred;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: darkred;
    border-radius: 1rem;
    color: white;
  }
`;
export const PriceBox = styled.div`
  font-weight: 700;
  text-align: center;
  margin: 20px auto;
`;
export const OrderBtn = styled.button`
  height: 40px;
  width: 150px;
  background-color: darkred;
  border: none;
  border-radius: 1rem;
  color: white;
  font-weight: 700;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: darkred;
    border: darkred solid 8px;
    font-size: 700;
  }
  &:active {
    background-color: lightgrey;
    color: darkred;
  }
`;
