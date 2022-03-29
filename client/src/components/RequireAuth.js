import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { token } from "../actions";
const RequireAuth = (props) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  useEffect(() => {
    if (token) {
      props.token(token);
    }
  }, []);

  return !token ? <Navigate to="/login" /> : <Outlet />;
};
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { token })(RequireAuth);
