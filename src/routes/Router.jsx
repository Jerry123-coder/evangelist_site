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
// import ProgramDetails from '../pages/programDetails.jsx'
// import BlogDetails from '../pages/blogDetails.jsx'
// import DirectoryDetails from '../pages/DrectoryDetails.jsx'
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

export const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <Container />,
      children: [
        { element: <Home />, index: true },
        { element: <About />, path: "about" },
        { element: <Clergy />, path: "clergy" },

        { element: <Programs />, path: "programs" },
        { element: <Societies />, path: "societies" },
        { element: <Gallery />, path: "gallery" },
        { element: <Projects />, path: "projects" },
        //     {element: <ProgramDetails />, path:'programs/:programDetails'},
        //     {element: <ProgramDetails />, path:'programDetails'},
        { element: <Blog />, path: "blog" },
        //     {element: <BlogDetails />, path:'blog/:blogDetails'},
        { element: <Contact />, path: "contact" },
        { element: <Directory />, path: "directory" },
        { element: <Donate />, path: "donate" },
        { element: <ParishActivites />, path: "parish-activities" },
        { element: <Sacraments />, path: "sacrament" },
        { element: <DailyReadings />, path: "daily-reading" },
        { element: <OfficeHours />, path: "office-hours" },
        { element: <ParishYouthCouncil />, path: "parish-youth-council" },
        {
          element: <ParishPastorialCouncil />,
          path: "parish-pastorial-council",
        },

        //     {element: <DirectoryDetails />, path:'directory/:direcotryDetails'},
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  //  return routes;
};
