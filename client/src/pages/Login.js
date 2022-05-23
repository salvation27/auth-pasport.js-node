import React from "react";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

 const github = () => {
   window.open("http://localhost:5000/auth/github", "_self");
 };


  return (
    <>
      <h2>Login</h2>
      <div className="login_form">
        <div className="login_form_sosial">
          <button onClick={google}>Google</button>
          <button onClick={github}>GitHub</button>
          <button>FaceBook</button>
        </div>
        <div className="login_form_default">
          <input type="text" placeholder="userName" />
          <input type="text" placeholder="userPass" />
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
