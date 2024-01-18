import './MovieList.css'
import MovieCard from "../MovieCard/Index.jsx";
import {useEffect, useState} from "react";

function MovieList(props) {
  const [movies, setMovies] = useState(false);
  const loadMovie = ()=>{
    fetch(props.url)
        .then((res)=>res.json())
        .then((json)=>{
          setMovies(json)
        });


  };

  //fixing scroll shit
  function infiniteScroll(element){
      let maxScroll = element.scrollWidth - element.clientWidth
      console.log(element.scrollLeft +" & "+ maxScroll)
      console.log(element.clientWidth)

      if (element.scrollLeft > maxScroll){
          element.scrollLeft = 1;
      }else if (element.scrollLeft === 0){
          element.scrollLeft = maxScroll - 1;
      }
  }

  useEffect(() => {
    return () => {
      loadMovie()
    };
  }, []);


  return (
      <div className={'movie-row'} onScroll={e=>{infiniteScroll(e.target)}}>
        {movies  && movies.map(movie=><MovieCard key={movie.id} Id={movie.id} Title={movie.title} ImgUrl={movie.poster}/>)}
        {movies  && movies.map(movie=><MovieCard key={movie.id} Id={movie.id} Title={movie.title} ImgUrl={movie.poster}/>)}
      </div>
  )

}

export default MovieList