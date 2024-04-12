import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useSessions } from "../../context/authContext.jsx";
import { useState } from "react";

const Login = () => {
  const { adminLogin } = useSessions();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const errorChild = e.target.parentNode.querySelector("span");
    if (errorChild) {
      errorChild.textContent = "";
    }
    setInvalidEmail(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setInvalidEmail(false);

    const form = document.querySelector("form");
    const formData = new FormData(form);
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
      const errorChild = input.parentNode.querySelector("span");
      if (errorChild) {
        input.parentNode.removeChild(errorChild);
      }
    });

    inputs.forEach((input) => {
      if (input.value == "") {
        const errorMessage = document.createElement("span");
        errorMessage.textContent = "Llena este campo para iniciar sesión";
        errorMessage.style.color = "#ff5252";
        errorMessage.style.fontSize = "12px";
        errorMessage.style.display = "block";
        errorMessage.style.marginTop = "2px";

        input.parentNode.appendChild(errorMessage);

        return;
      }
    });
    //* validate Mail
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputs[0].value != "" && !pattern.test(inputs[0].value)) {
      setInvalidEmail(true);
      return;
    }

    const dataToSend = {};

    for (const [key, value] of formData.entries()) {
      if (value == "") return;
      dataToSend[key] = value;
    }
    console.log(dataToSend);
    console.log(`all fields are full`);

    try {
      await adminLogin(dataToSend);
      navigate("/landingPageKratosForce/admin");
    } catch (error) {
      setLoginError(error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          <h1 className="loginTitle">Bienvenido!</h1> <b>(Morral KF45)</b>
          {/* <h1>Login</h1> */}
          <form action="">
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                id="username"
              />
              {invalidEmail && (
                <div className="invalidEmail">Email Invalido</div>
              )}
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </label>

            {loginError && loginError}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
