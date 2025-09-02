import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route index path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
