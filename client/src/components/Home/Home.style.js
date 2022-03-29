import styled from "styled-components";
import ImgPg from "../../assets/Supplies-basket.jpg";
export const BackGround = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgPg});
  background-position: center;
  height: calc(100vh - 70px);
  width: 100vw;
  padding: 0px calc((100vw - 1300px) / 2);
  width: 100%;

  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border: #fff solid 10px;
  border-radius: 2rem;
  height: 400px;
  width: 600px;
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.h1`
  font-size: 4rem;
`;
export const HomeP = styled.p`
  font-size: 2rem;
`;
export const HomeBtn = styled.button`
  height: 50px;
  width: 150px;
  border: none;
  background-color: white;
  border-radius: 1rem;
  color: darkred;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: darkred;
    color: #fff;
  }
  &:active {
    background-color: grey;
    color: darkred;
  }
`;
