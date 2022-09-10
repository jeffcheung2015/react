import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import moment from "moment";
function App() {
  const [user, setUser] = useState("");
  const [loginCounter, setLoginCounter] = useState(0);
  useEffect(() => {
    console.log("Called everytime when loginCounter value changes");
    const run = async () => {
      try {
        const getUserRes = await axios.get("http://localhost:8080/user");
        console.log("getUserRes", getUserRes.data);

        setUser(getUserRes.data.user);
      } catch (err) {
        console.log(err);
      }
    };

    if (loginCounter) {
      run();
    }
  }, [loginCounter]);

  useEffect(() => {
    console.log("Called Once");
  }, []);

  const onLoginClick = () => {
    setLoginCounter(loginCounter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          user:{" "}
          {user !== "" ? (
            <Typography>
              {user} welcome back!! last login time:{" "}
              {moment().format("DD-MMM-YYYY HH:mm:ss")}
            </Typography>
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
