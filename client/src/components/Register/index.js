import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Card,
  ErrorP,
  Label,
  Span,
  InvalidP,
  SignupBtn,
  FootP,
  Form,
} from "./Register.style";
import axios from "../../axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{8,23}$/;
const PWD_REGEX = /^(?=.*[a-z]).{4,24}$/;

const Register = () => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);

    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);

    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post("/auth/register", {
        email: user,
        password: pwd,
      });

      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <>
      {success ? (
        <Container>
          <Card>
            <h1>Success!</h1>
            <p>
              <Link to="/login">Sign In</Link>
            </p>
          </Card>
        </Container>
      ) : (
        <Container>
          <Card>
            <ErrorP errMsg={errMsg ? "errmsg" : "offscreen"}>{errMsg}</ErrorP>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="username">
                Username:
                <Span display={validName ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </Span>
                <Span display={validName || !user ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </Span>
              </Label>
              <br />
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <InvalidP
                display={
                  userFocus && user && validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters. <br />
                Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens allowed.
              </InvalidP>
              <br />
              <Label htmlFor="password">
                Password:
                <Span display={validPwd ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </Span>
                <Span display={validPwd || !pwd ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </Span>
              </Label>
              <br />
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <InvalidP
                display={PwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters. <br />
                Must include uppercase and lowercase letters, a number and a
                special character. <br />
                Allowed special characters:!@#$%
              </InvalidP>
              <br />
              <Label htmlFor="confirm_pwd">
                Confirm Password:
                <Span
                  display={
                    validMatch && matchPwd && validPwd ? "valid" : "hide"
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </Span>
                <Span display={validMatch || !matchPwd ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </Span>
              </Label>
              <br />
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <InvalidP
                display={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </InvalidP>
              <br />
              <SignupBtn
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sing Up
              </SignupBtn>
            </Form>
            <FootP>
              Already registered?
              <br />
              <span>
                <Link to="/login">Sign In</Link>
              </span>
            </FootP>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Register;
