import { useState as UseState } from 'react'

import MovieCard from '../MovieCard/Index'

import './Index.css'

function TitleCase(Str) {
    return Str.charAt(0).toUpperCase() + Str.substr(1).toLowerCase();
}

function SearchView() {
    const [Movies, SetMovies] = UseState([])
    const [Query, SetQuery] = UseState("")

    async function FetchMovies() {
        const MovieResponse = await fetch("https://annexbios.gluwebsite.nl/api/main.php")
        const MovieData = await MovieResponse.json()

        SetMovies(MovieData)
    }

    if (Movies.length === 0) {
        FetchMovies()
        return null
    }

    return (
        <div className="SearchView">
            <input value={TitleCase(Query)} onChange={(E) => SetQuery(E.target.value.toLowerCase())} type="text" placeholder="Enter query" ></input>
            <div className='cardlist'>
                {
                    (
                        Movies.filter(M => { return !M.name.toLowerCase().search(Query) }).map(
                            Movie => {
                                return (
                                    <MovieCard
                                        key={Movie.id}
                                        Id={Movie.id}
                                        Title={Movie.name}
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