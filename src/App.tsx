import React from "react";

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Private } from "./pages/Private/index";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Login</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Restrict Access</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
