import logo from "./logo.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div>
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;