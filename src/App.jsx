import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import Footer from "./components/Footer.jsx";
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <main>
        {" "}
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
