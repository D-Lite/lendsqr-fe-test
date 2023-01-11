import { welcome, logo, name, Logo, useForm } from "../components/index";
import { ILogin } from "../interfaces/LoginData";
import { useState } from "react";
const Login = () => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const initialState: ILogin = {
    email: "",
    password: "",
  };
  const { handleBlur, handleChange, handleSubmit, values, errors } =
    useForm(initialState);

  const handlePasswordShow = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <main className="login">
      <div className="login__image">
        <Logo logo={logo} name={name} className="logobox" />

        <img src={welcome} alt="welcome" className="login-mainimg" />
      </div>
      <div className="login__formbox">
        <Logo logo={logo} name={name} className="logobox-ext" />
        <div className="login__form">
          <div className="login__intro">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </div>
          <form>
            <div className="login__inputbox">
              <input
                type="email"
                placeholder="Email"
                className="input__box"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                name="email"
              />
            </div>
            <p className="error">{errors.email}</p>
            <div className="login__inputbox">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="input__box"
                name="password"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
              />
              <p className="error">{errors.password}</p>

              <button
                type="button"
                className="password"
                onClick={handlePasswordShow}
              >
                {passwordShown ? "hide" : "show"}
              </button>
            </div>
            <div className="login__forgot">
              <a href="/#">forgot password?</a>
            </div>
            <div className="login__button">
              <button type="submit" onClick={(e) => handleSubmit(e, values)}>
                log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
