import React, { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import Main from "./components/Main.jsx"
import Add from "./components/Add.jsx"


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Add" element={<Add/>}/>
    </Routes>
  );
}

export default App
