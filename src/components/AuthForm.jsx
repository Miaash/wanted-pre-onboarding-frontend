import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const AuthForm = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassWordError] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPassWordError(false);
    } else if (e.target.value.length >= 8) {
      setPassWordError(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <LoginBox>
          <h1>{children}</h1>
          <LoginForm onSubmit={onSubmitHandler}>
            <EmailBox>
              <label htmlFor="Email">이메일</label>
              <input
                id="Email"
                type="email"
                placeholder="이메일을 입력하세요"
                onChange={emailInput}
              />
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
            <Button>{children}</Button>
            {isLoginForm ? <Text>회원이 아니십니까?</Text> : <Text></Text>}
          </LoginForm>
        </LoginBox>
      </MainWrapper>
    </>
  );
};

export default AuthForm;

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
  :hover {
    background-color: #2c5bf2;
    color: #fff;
  }
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;
