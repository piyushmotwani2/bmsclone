import "./Login.css";
import { React } from "react";
import { useHistory } from "react-router-dom";
import LoginModal from "../../Components/Modal/LoginModal";

const Login = () => {
  const history = useHistory();
  const moveToSignup = () => {
    history.push("/signup");
  };
  const signIn = () => {
    history.push("/home");
  };
  return (
    <div className="login-modal">
      <LoginModal signIn={signIn} moveToSignup={moveToSignup} />
    </div>
  );
};

export default Login;
