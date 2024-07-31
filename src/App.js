import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route,Link } from "react-router-dom";
import Page2 from "../src/page/Page2";
import Page1 from "../src/page/Page1";
import Hero from "./componets/Hero";
import About from "./componets/About";
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<About />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
