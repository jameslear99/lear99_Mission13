import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./nav";
import Movies from "./MovieCollection";
import Podcast from "./Podcast";
import HomePage from "./Home";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";

//this is the base app, it essentially directs the show and brings in the navbar as well as the page that we're on

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Podcasts" element={<Podcast />} />
          <Route path="Movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
