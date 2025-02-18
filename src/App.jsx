import React, { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import Main from "./components/Main.jsx"
<<<<<<< HEAD
import Add from "./components/Add.jsx"
=======
>>>>>>> 23194706eb72767e07bb85538e7db5fe47df9326


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
<<<<<<< HEAD
      <Route path="/Add" element={<Add/>}/>
=======
>>>>>>> 23194706eb72767e07bb85538e7db5fe47df9326
    </Routes>
  );
}

export default App
