import React from 'react'
import {useRoutes} from 'react-router-dom'
import Container from '../components/Container.jsx'
import NotFound from '../pages/NotFound.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Blog from '../pages/Blog.jsx'
import Programs from '../pages/Programs.jsx'
import Directory from '../pages/Directory.jsx'
import ProgramDetails from '../pages/programDetails.jsx'
import BlogDetails from '../pages/blogDetails.jsx'
import DirectoryDetails from '../pages/DrectoryDetails.jsx'
import Societies from '../pages/Societies.jsx'
import Gallery from '../pages/Gallery.jsx'
import Projects from '../pages/Projects.jsx'


export const Router = () => {
  return useRoutes([
    {
         path: '',
         element:<Container />,
         children: [
              {element: <Home />, index:true},
              {element: <About />, path:'about'},
              {element: <Programs />, path:'programs'},
              {element: <Societies />, path:'societies'},
              {element: <Gallery />, path:'gallery'},
              {element: <Projects />, path:'projects'},
          //     {element: <ProgramDetails />, path:'programs/:programDetails'},
              {element: <ProgramDetails />, path:'programDetails'},
              {element: <Blog />, path:'blog'},
          //     {element: <BlogDetails />, path:'blog/:blogDetails'},
              {element: <Contact />, path:'contact'},
              {element: <Directory />, path:'directory'},
          //     {element: <DirectoryDetails />, path:'directory/:direcotryDetails'},
         ],
    },
    {
         path: '*',
         element: <NotFound />,
    }
 ]);

//  return routes;
};
