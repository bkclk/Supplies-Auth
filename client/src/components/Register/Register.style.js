import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  border: darkred solid 10px;
  border-radius: 1rem;
  width: 400px;
  height: 500px;
  padding: 1rem;

  position: relative;

  h1 {
    padding-bottom: 1rem;
  }
`;
export const ErrorP = styled.p`
  background-color: orange;
  display: ${({ errMsg }) => (errMsg === "offscreen" ? "none" : null)};
`;
export const Form = styled.form`
  justify-self: flex-start;
`;
export const Label = styled.label`
  font-weight: 700;
`;
export const Span = styled.span`
  display: ${({ display }) => (display === "hide" ? "none" : null)};
`;

export const InvalidP = styled.p`
  margin: 5px 0;
  padding: 5px;
  background-color: darkred;
  border-radius: 0.7rem;
  color: #fff;
  display: ${({ display }) => (display === "offscreen" ? "none" : null)};
`;

export const SignupBtn = styled.button`
  margin-top: 1rem;
`;
export const FootP = styled.p`
  position: absolute;
  font-weight: 700;
  bottom: 5px;
`;
