import React, { useReducer } from "react";
import axios from "axios";
import SERVER_API from "constants";
import "./Login.scss";

const Login = () => {
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      pwd: ""
    }
  );

  function handleInput(e) {
    const target = e.target.name;
    const value = e.target.value;

    setInput({ [target]: value });
  }

  function handleLogin() {
    const user = {
      email: input.email,
      pwd: input.pwd
    };

    axios.post(SERVER_API, { user }).then(res => {
      console.log(res);
    });
  }

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

      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button">뒤로가기</button>
    </div>
  );
};

export default Login;
