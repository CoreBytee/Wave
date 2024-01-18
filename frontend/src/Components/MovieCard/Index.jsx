import { useState as UseState, useRef as UseRef } from 'react'

import MovieDetails from '../MovieDetails/Index'

import './Index.css'

function MovieCard(
    {
        Id,
        Title,
        ImgUrl = "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    }
) {
    const [MovieDetailsVisible, SetMovieDetailsVisible] = UseState(false)

    function Click() {
        SetMovieDetailsVisible(true)
    }

    return (
        <div className={`MovieCard ${MovieDetailsVisible ? "" : "animations"}`}>
            <img onClick={Click} src={ImgUrl}></img>
            <MovieDetails Visible={MovieDetailsVisible} SetVisible={SetMovieDetailsVisible} Id={Id} />
        </div>
    )
}

export default MovieCard