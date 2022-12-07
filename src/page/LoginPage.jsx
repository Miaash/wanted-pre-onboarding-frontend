import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPassWordError] = useState(false);
  const navigate = useNavigate();

  const emailInput = (e) => {
    setEmail(e.target.value);
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPassWordError(false);
    } else if (e.target.value.length >= 8) {
      setPassWordError(true);
    }
  };

  const onLoginHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://pre-onboarding-selection-task.shop/auth/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        alert("로그인 성공!");
        navigate("/todo");
      })
      .catch((err) => {
        if (err.response.data.statusCode === 404) {
          alert(err.response.data.message);
        } else if (err.response.data.statusCode === 401) {
          alert(err.response.data.message);
          navigate("/signup");
        }
      });
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <LoginBox>
          <h1>로그인</h1>
          <LoginForm onSubmit={onLoginHandler}>
            <EmailBox>
              <label htmlFor="Email">이메일</label>
              <input
                id="Email"
                type="email"
                placeholder="이메일을 입력하세요"
                onChange={emailInput}
              />
              {emailError ? (
                <p className="correct">올바른 형식입니다.</p>
              ) : (
                <p className="wrong">이메일 형식에 맞지 않습니다.</p>
              )}
            </EmailBox>
            <PasswordBox>
              <label htmlFor="Password">비밀번호</label>
              <input
                id="Password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={passwordInput}
              />
              {passwordError ? (
                <p className="correct">올바른 형식입니다.</p>
              ) : (
                <p className="wrong">8자 이상 입력해주세요.</p>
              )}
            </PasswordBox>
            {passwordError && emailError ? (
              <Button>로그인</Button>
            ) : (
              <DisabledButton disabled={true} style={{ cursor: "no-drop" }}>
                로그인
              </DisabledButton>
            )}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Text>회원이 아니십니까?</Text>
            </Link>
          </LoginForm>
        </LoginBox>
      </MainWrapper>
    </>
  );
};

export default LoginPage;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 400px;
  border: 1px solid #cfcfcf;
  border-radius: 30px;

  padding-bottom: 30px;
  label {
    margin-right: 10px;
    font-size: 17px;
  }
  input {
    width: 180px;
    height: 30px;
  }
`;

const LoginForm = styled.form``;

const EmailBox = styled.div`
  margin-top: 5px;
  .correct {
    color: green;
    font-size: 13px;
  }
  .wrong {
    color: red;
    font-size: 13px;
  }
`;

const PasswordBox = styled.div`
  margin-top: 20px;
  .correct {
    color: green;
    font-size: 13px;
  }
  .wrong {
    color: red;
    font-size: 13px;
  }
`;

const Button = styled.button`
  width: 250px;
  height: 35px;
  font-size: 15px;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: #2c5bf2;
    color: #fff;
  }
`;

const DisabledButton = styled.button`
  width: 250px;
  height: 35px;
  font-size: 15px;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #797979;
  :hover {
    cursor: pointer;
  }
`;
