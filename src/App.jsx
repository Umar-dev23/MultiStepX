import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";

function App() {
  return (
    <div class="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-dark)] to-[var(--color-secondary)]">
      <Routes>
        <Route index path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
