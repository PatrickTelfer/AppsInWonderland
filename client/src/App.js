import "./App.css";
import Home from "./Components/Home/Home";
import Lobby from "./Components/Lobby/Lobby";
import PromptInput from "./Components/PromptInput/PromptInput";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { SocketContext, socket } from "./Context/socket";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Switch>
          <Route path="/Prompt">
            <PromptInput />
          </Route>
          <Route path="/Lobby/:id">
            <Lobby />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
