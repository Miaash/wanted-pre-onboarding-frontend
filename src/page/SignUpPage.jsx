import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";

const SignPage = () => {
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

  const onSignupHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://pre-onboarding-selection-task.shop/auth/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert("회원가입 성공!");
        navigate("/");
      })
      .catch((err) => {
        if (err.response.data.statusCode === 400) {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <LoginBox>
          <h1>회원가입</h1>
          <LoginForm onSubmit={onSignupHandler}>
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
              <Button>회원가입</Button>
            ) : (
              <DisabledButton disabled={true} style={{ cursor: "no-drop" }}>
                회원가입
              </DisabledButton>
            )}
          </LoginForm>
        </LoginBox>
      </MainWrapper>
    </>
  );
};

export default SignPage;

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
