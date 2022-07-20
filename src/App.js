import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewList from "./components/NewList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/newlist" element={<NewList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
