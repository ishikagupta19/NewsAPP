import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";



function App() {
 

  return (
    <BrowserRouter>
      <div className="App" >
      
        <Routes>
        <Route
            exact
            path="/"
            element={
              <Login/>
            }
          />
        <Route
            exact
            path="/home"
            element={
              <Home/>
            }
          />
       
        </Routes>
      </div>
   
    </BrowserRouter>
  );
}

export default App;
