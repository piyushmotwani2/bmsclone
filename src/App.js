import "./App.css";
import { React, useState } from "react";
import Routes from "./Routes/Routes";
import LoginContext from "./Context/LoginContext";

const App = () => {
  const [user, setUser] = useState({
    user: {
      email: "",
    },
  });
  return (
    <LoginContext.Provider value={[user, setUser]}>
      <Routes />
    </LoginContext.Provider>
  );
};

export default App;
