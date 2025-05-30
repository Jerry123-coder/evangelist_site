import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./styles/placeholder.css";

// Lazy load components that aren't needed immediately
const Router = lazy(() => import("./routes/Router").then(module => ({ default: module.Router })));
const Footer = lazy(() => import("./components/Footer.jsx"));
const WhatsAppButton = lazy(() => import("./components/WhatsApp.jsx"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="flex items-center justify-center h-screen w-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>}>
        <main>
          <Router />
          <WhatsAppButton />
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
