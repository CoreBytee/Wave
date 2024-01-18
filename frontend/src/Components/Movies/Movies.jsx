import './Movies.css'
import MovieRow from '../MovieRow/MovieRow.jsx'
import MovieLead from '../MovieLead/MovieLead.jsx'
import {useState} from "react";


function Movies() {

  return (
    <div className="Movies">
        {false && <div><h1>its loading</h1></div>}
        <MovieLead className={"movie-lead"} url={'https://annexbios.gluwebsite.nl/api/main.php?id=5'}/>
        <MovieRow />
        <MovieRow />
    </div>
  )
}

export default Movies;