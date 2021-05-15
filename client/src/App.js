import "./App.css";
import Home from "./Home/Home";
import Lobby from "./Lobby/Lobby";
import PromptInput from "./PromptInput/PromptInput";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Prompt">
          <PromptInput />
        </Route>
        <Route path="/Lobby">
          <Lobby />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
