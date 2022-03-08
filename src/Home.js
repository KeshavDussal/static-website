  import logo from './logo.svg';
  import './App.css';
  import React from "react";
  import web from '../src/images/2014_bugatti_veyron_ettore_bugatti_legend_edition-1366x768.jpg';
  import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = () => {
  return (
     <>
      <Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started"/>
     </>
  );
};


export default Home;
