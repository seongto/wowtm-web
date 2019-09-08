import React from "react";
import "./ErrorNotFound.scss";
import { withRouter } from "react-router-dom";

const ErrorNotFound = props => {
  return (
    <div className="error404-wrapper">
      <h1>404 Error Not Found.</h1>
      <p>페이지를 찾을 수가 없네요.</p>
      <div onClick={() => props.history.push("/")}>홈으로 돌아가기</div>
    </div>
  );
};

export default withRouter(ErrorNotFound);
