import "./App.css";
import Home from "./Home/Home";
import Lobby from "./Lobby/Lobby";
import PromptInput from "./PromptInput/PromptInput";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io("http://localhost:3000");
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/Prompt">
          <PromptInput socket={socketRef.current} />
        </Route>
        <Route path="/Lobby">
          <Lobby socket={socketRef.current} />
        </Route>
        <Route path="/">
          <Home socket={socketRef.current} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
