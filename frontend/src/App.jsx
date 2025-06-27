import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Calendar9 from "./components/Calendar9";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/calendar9" element={<Calendar9 />} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      }
    </>
  );
}

export default App;
