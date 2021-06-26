import Home from "./Components/Home/Home";
import Lobby from "./Components/Lobby/Lobby";
import PromptInput from "./Components/PromptInput/PromptInput";
import DrawingScreen from "./Components/DrawingScreen/DrawingScreen";
import Voting from "./Components/Voting/Voting";
import Results from "./Components/Results/Results";
import RoundResults from "./Components/RoundResults/RoundResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { SocketContext, socket } from "./Context/socket";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Switch>
          <Route path="/RoundResults/:id">
            <RoundResults />
          </Route>
          <Route path="/Results/:id">
            <Results />
          </Route>
          <Route path="/Voting/:id">
            <Voting />
          </Route>
          <Route path="/Prompt/:id">
            <PromptInput />
          </Route>
          <Route path="/Lobby/:id">
            <Lobby />
          </Route>
          <Route path="/DrawingScreen/:id">
            <DrawingScreen />
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
