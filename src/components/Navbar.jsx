
import { Link, useNavigate } from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("");
    }
  return (
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie/>
            MoviesLib</Link>
          
        </h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Search a movie'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
     
     
  )
}

export default Navbar