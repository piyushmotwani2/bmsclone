import "./Signup.css";
import { React } from "react";
import { useHistory } from "react-router-dom";
import SignupModal from "../../Components/Modal/SignupModal";

const Signup = () => {
  const history = useHistory();
  const moveToSignin = () => {
    history.push("/login");
  };
  const signUp = () => {
    history.push("/home");
  };
  return (
    <div className="signin-modal">
      <SignupModal signUp={signUp} moveToSignin={moveToSignin} />
    </div>
  );
};

export default Signup;
