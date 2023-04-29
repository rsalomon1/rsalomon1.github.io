import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;