import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsApp.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Navbar /> */}
      <main>
        {" "}
        <Router />
      <WhatsAppButton/>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
