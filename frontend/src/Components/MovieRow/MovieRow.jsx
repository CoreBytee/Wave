import './Index.css'
import MovieList from "../MovieList/MovieList.jsx";

function MovieRow() {
  return (
      <div className={'movie-list'}>
          <h2 className={'text-light'}>Recommended</h2>
        <MovieList url={'https://annexbios.gluwebsite.nl/api/main.php'}/>
      </div>
  )
}

export default MovieRow