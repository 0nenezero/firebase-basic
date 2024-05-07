import React, { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newAccount, setNewAccount] = useState(true);

  const inputChange = (e) => {
    const inputData = {
      type: e.target.type,
      name: e.target.name,
      value: e.target.value,
    };

    if (inputData.name === "email") {
      setEmail(inputData.value);
    } else if (inputData.name === "password") {
      setPassword(inputData.value);
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>LoginForm입니다</h2>
      <form onSubmit={submitLogin}>
        <label htmlFor="email">
          이메일:{" "}
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={inputChange}
          />
        </label>
        <label htmlFor="password">
          비밀번호:{" "}
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={inputChange}
          />
        </label>
        <button type="submit">{newAccount ? "회원가입하기" : "로그인"}</button>
      </form>
    </>
  );
}

export default Auth;
