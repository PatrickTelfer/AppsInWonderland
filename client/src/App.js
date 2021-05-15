import "./App.css";
import Home from "./Home/Home";
import Lobby from "./Lobby/Lobby";
import PromptInput from "./PromptInput/PromptInput";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState();
  useEffect(() => {
    if (!socket) {
      setSocket(io("http://localhost:3000"));
    }
  }, [socket]);
  return (
    <Router>
      <Switch>
        <Route path="/Prompt">
          <PromptInput socket={socket} />
        </Route>
        <Route path="/Lobby/:id">
          <Lobby socket={socket} />
        </Route>
        <Route path="/">
          <Home socket={socket} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
