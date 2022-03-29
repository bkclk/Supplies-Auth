import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
export const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  width: 100vw;
`;
export const ListContainer = styled.div`
  padding: 3rem 1rem;
  width: 100%;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr 0.7fr;
  color: #fff;
  background-color: darkred;
  padding: 10px 0rem;
  margin-top: 5px;
  border-radius: 1rem;
  font-size: 1.2rem;
  div {
    padding: 0rem 0.5rem;
  }
  div.title {
    font-weight: 700;
    border-right: solid 3px lightgrey;
  }
`;
export const AddIcon = styled(BsPlusCircle)`
  align-self: center;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background-color: white;
    color: darkred;
  }
`;
