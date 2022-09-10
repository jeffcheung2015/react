import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios/index";
import { Button, Typography } from "@mui/material/index";

function App() {
  const [user, setUser] = useState("");
  const [showUser, setShowUser] = useState(false);
  useEffect(() => {
    const run = async () => {
      const getUserRes = await axios.get("localhost:8080/user");
      console.log("getUserRes", getUserRes.data);

      setUser(getUserRes.data.user);
    };
    run();
  }, []);

  const onLoginClick = () => {
    setShowUser(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          user:{" "}
          {showUser ? (
            <Typography>{user}</Typography>
          ) : (
            <Typography>Not logged in</Typography>
          )}
        </p>
        <Button onClick={onLoginClick}>Login</Button>
      </header>
    </div>
  );
}

export default App;
