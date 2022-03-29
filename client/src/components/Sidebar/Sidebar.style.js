import styled from "styled-components";

export const Container = styled.div`
  background-color: darkred;
  width: 250px;
  height: calc(100vh - 70px);
  padding: 2rem 1rem;
  color: #fff;
`;
export const CatH1 = styled.h1`
  margin: 1rem 0rem 2rem 0rem;
`;
export const CatRow = styled.div`
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
  margin: 0.3rem 0rem;
  font-weight: 700;
  letter-spacing: 2px;
  border: 5px solid #fff;
  border-radius: 1rem;
  transition: 350ms ease-in-out;
  background-color: ${({ activeBtn }) => (activeBtn ? "white" : "darkred")};
  color: ${({ activeBtn }) => (!activeBtn ? "white" : "darkred")};
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: darkred;
  }
`;
