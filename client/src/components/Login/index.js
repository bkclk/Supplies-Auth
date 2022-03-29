import { useRef, useState, useEffect } from "react";
import { Label } from "../Register/Register.style";
import { Container, Card, ErrorP, Form, SigninBtn, FootP } from "./Login.style";
import axios from "../../axios";
import { connect } from "react-redux";
import { token } from "../../actions";
import { Link } from "react-router-dom";

const Login = (props) => {
  const userRef = useRef();

  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        email: userName,
        password: pwd,
      });
      const accessToken = response?.data?.access_token;
      props.token({ user: userName, password: pwd, token: accessToken });
      window.localStorage.setItem(
        "userToken",
        JSON.stringify({
          user: userName,
          password: pwd,
          token: accessToken,
        })
      );
      setUserName("");
      setPwd("");

      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrMsg("Invalid Username or Password");
      } else {
        setErrMsg("Login Fail");
      }
    }
  };
  return (
    <Container>
      <Card>
        {success ? (
          <>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <Link to="/supplies">Go to Supplies</Link>
            </p>{" "}
          </>
        ) : (
          <>
            <ErrorP errMsg={errMsg ? "errmsg" : "offscreen"}>{errMsg}</ErrorP>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="username">Username:</Label>
              <br />
              <input
                type="text"
                id="username"
                required
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
              <br />
              <Label htmlFor="password">Password:</Label>
              <br />
              <input
                type="password"
                id="password"
                required
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
              <br />
              <SigninBtn disabled={!userName || !pwd ? true : false}>
                Sing In
              </SigninBtn>
            </Form>
            <FootP>
              Need An Account?
              <br />
              <span>
                <Link to="/register">Sign Up</Link>
              </span>
            </FootP>
          </>
        )}
      </Card>
    </Container>
  );
};

export default connect(null, { token })(Login);
