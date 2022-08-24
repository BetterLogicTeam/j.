import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header2/Header2";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Index_main from "./Components/Index_main";
import Azadi_main from "./Components/Azadi_main";
import { useState } from "react";

function App() {
  const [addcart, setaddcart] = useState(0);
  console.log("ADDTOCARD", addcart);
  return (
    <div className="">
      <BrowserRouter>
        <Header addcart={addcart}></Header>
        <Header2 />
        <Routes>
          <Route exact path="/" element={<Index_main />} />

          <Route
            exact
            path="/Azadi_main"
            element={<Azadi_main setaddcart={setaddcart} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
