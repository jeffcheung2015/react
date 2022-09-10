import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";

function App() {
  const [user, setUser] = useState("");
  const [showUser, setShowUser] = useState(false);
  useEffect(() => {
    console.log("Called everytime when showUser value changes");
    const run = async () => {
      try {
        const getUserRes = await axios.get("http://localhost:8080/user");
        console.log("getUserRes", getUserRes.data);

        setUser(getUserRes.data.user);
      } catch (err) {
        console.log(err);
      }
    };

    if (showUser) {
      run();
    }
  }, [showUser]);

  useEffect(() => {
    console.log("Called Once");
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
            <Typography>{user} welcome back!!</Typography>
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
