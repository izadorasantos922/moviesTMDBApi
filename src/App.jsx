import { Outlet, Link } from 'react-router-dom'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';
import Navbar from './components/Navbar';

function App() {

  return (
    <> <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<App/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<Movie/>}/>
      <Route path="search" element={<Search/>}/>
    </Routes>
   </BrowserRouter></>
  )
}

export default App
