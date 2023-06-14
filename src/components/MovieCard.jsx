import "../pages/MovieGrid.css"
import {FaStar} from "react-icons/fa";
import { Link } from "react-router-dom";

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar/>
        </p>
        {showLink && <Link to={`/movie/${movie.id}`} >Details</Link>}
    </div>
  )
}

export default MovieCard