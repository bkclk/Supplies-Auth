import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, BackGround, Title, HomeP, HomeBtn } from "./Home.style";
import { connect } from "react-redux";
import { token } from "../../store/actions";

const Home = (props) => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("userToken"));
  useEffect(() => {
    if (token) {
      props.token(token);
    }
  }, []);
  const handleButton = () => {
    navigate("supplies");
  };
  return (
    <BackGround>
      <Card>
        <Title>WELCOME</Title>
        <HomeP>If You Need It - We Definitely Have It </HomeP>
        <HomeBtn onClick={handleButton}>Order Now</HomeBtn>
      </Card>
    </BackGround>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { token })(Home);
