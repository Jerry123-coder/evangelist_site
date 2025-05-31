import React from "react";
import { useRoutes } from "react-router-dom";
import Container from "../components/Container.jsx";
import NotFound from "../pages/NotFound.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Blog from "../pages/Blog.jsx";
import Programs from "../pages/Programs.jsx";
import Directory from "../pages/Directory.jsx";
import Societies from "../pages/Societies.jsx";
import Gallery from "../pages/Gallery.jsx";
import Projects from "../pages/Projects.jsx";
import Donate from "../pages/Donate.jsx";
import Clergy from "../pages/Clergy.jsx";
import ParishActivites from "../pages/ParishActivites.jsx";
import ParishCalender from "../pages/ParishCalender.jsx";
import DailyReadings from "../pages/DailyReadings.jsx";
import OfficeHours from "../pages/OfficeHours.jsx";
import ParishPastorialCouncil from "../pages/ParishPastorialCouncil.jsx";
import ParishYouthCouncil from "../pages/ParishYouthCouncil.jsx";
import Sacraments from "../pages/Sacraments.jsx";
import Admin from "../pages/knolta-tests/admin";
import AdminDashboard from "../pages/knolta-tests/admin/Dashboard";
import LoginPage from "../pages/admin/Login.jsx";
import ProtectedRoute from "../pages/admin/ProtectedRoute.jsx";
import Registration from "../pages/Registration";
import MembershipForm from "../pages/MembershipForm";
import KnoltaLogin from "../pages/KnoltaLogin";
import KnoltaDashboard from "../pages/KnoltaDashboard";


const routes = [
  {
    path: "/",
    element: <Container />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "clergy", element: <Clergy /> },
      { path: "programs", element: <Programs /> },
      { path: "societies", element: <Societies /> },
      { path: "gallery", element: <Gallery /> },
      { path: "projects", element: <Projects /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "directory", element: <Directory /> },
      { path: "donate", element: <Donate /> },
      { path: "parish-activities", element: <ParishActivites /> },
      { path: "sacrament", element: <Sacraments /> },
      { path: "daily-reading", element: <DailyReadings /> },
      { path: "office-hours", element: <OfficeHours /> },
      { path: "parish-youth-council", element: <ParishYouthCouncil /> },
      { path: "parish-pastorial-council", element: <ParishPastorialCouncil /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      { path: "membership", element: <Registration /> },
      { path: "membership-form", element: <MembershipForm /> },
      { path: "knolta-tests", element: <KnoltaLogin /> },
      { path: "knolta-tests/dashboard", element: <KnoltaDashboard /> },
      { 
        path: "knolta-tests/admin/*", 
        element: <Admin />,
        children: [
          { index: true, element: <AdminDashboard /> },
          // Add other admin routes here as needed
        ]
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const Router = () => {
  return useRoutes(routes);
};
