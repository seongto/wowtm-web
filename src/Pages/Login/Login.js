import React, { useReducer } from "react";
import "./Login.scss";

const Login = () => {
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      pwd: ""
    }
  );

  const handleInput = e => {
    const target = e.target.name;
    const value = e.target.value;

    setInput({ [target]: value });
  };

  return (
    <div className="login-wrapper">
      <span>E-mail : </span>
      <input
        type="text"
        name="email"
        value={input.email}
        onChange={handleInput}
      />
      <br />
      <span>Password : </span>
      <input
        type="password"
        name="pwd"
        value={input.pwd}
        onChange={handleInput}
      />
      <br />

      <button type="button">Login</button>
      <button type="button">뒤로가기</button>
    </div>
  );
};

export default Login;
