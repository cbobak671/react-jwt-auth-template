import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar user={user} />
      <h1>Hello world!</h1>
    </>
  );
};

export default App;
