import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Items from "./components/Items.js";
import SignIn from "./components/SignIn.js";
import ByePage from "./components/ByePage.js";
import DashBoard from "./components/DashBoard.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Items />
              </>
            }
          />
          <Route
            path="/SignIn"
            element={
              <>
                <NavBar />
                <SignIn />
              </>
            }
          />
          <Route
            path="/bye"
            element={
              <>
                <NavBar />
                <ByePage />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <NavBar />
                <DashBoard />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
