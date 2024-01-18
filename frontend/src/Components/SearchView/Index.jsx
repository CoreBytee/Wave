import { useEffect as UseEffect, useState as UseState } from 'react'

import MovieCard from '../MovieCard/Index'

import './Index.css'

function SearchView() {
    const [Movies, SetMovies] = UseState([])

    UseEffect(
        () => {
            async function FetchMovies() {
                const MovieResponse = await fetch("https://annexbios.gluwebsite.nl/api/main.php")
                const MovieData = await MovieResponse.json()

                console.log(MovieData)
                SetMovies(MovieData)
            }

            if (Movies.length === 0)
                FetchMovies()
        }
    )



    return (
        <div className="SearchView">
            <input type="text" placeholder="Enter query" ></input>
            <div className='cardlist'>
                {
                    (
                        Movies.map(
                            Movie => {
                                return (
                                    <MovieCard
                                        Id={Movie.id}
                                        Title={Movie.title}
                                        ImgUrl={Movie.poster}
                                    />
                                )
                            }
                        )
                    )
                }
            </div>
        </div>
    )
}

export default SearchView