import React, { useReducer } from "react";
import axios from "axios";
import SERVER_API from "constants";
import "./Signup.scss";

const Signup = () => {
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      name: "",
      pwd: ""
    }
  );

  function handleInput(e) {
    const target = e.target.name;
    const value = e.target.value;

    setInput({ [target]: value });
  }

  function handleSignup() {
    const newUser = {
      email: input.email,
      name: input.name,
      pwd: input.pwd
    };

    axios.post(SERVER_API, { newUser }).then(res => console.log(res));
  }

  return (
    <div className="signup-wrapper">
      <span>E-mail : </span>
      <input
        type="text"
        name="email"
        value={input.email}
        onChange={handleInput}
      />
      <br />
      <span>Name : </span>
      <input
        type="text"
        name="name"
        value={input.name}
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

      <button type="button" onClick={handleSignup}>
        Signup
      </button>
      <button type="button">뒤로가기</button>
    </div>
  );
};

export default Signup;
