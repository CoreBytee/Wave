import { useState as UseState } from 'react'

import MovieCard from '../MovieCard/Index'

import './Index.css'

import FrownImage from '../../assets/frown.svg'

function SavedView() {
    const [Movies, SetMovies] = UseState([])

    async function FetchMovies() {
        const MovieResponse = await fetch("https://annexbios.gluwebsite.nl/api/main.php")
        const MovieData = await MovieResponse.json()

        SetMovies(MovieData)
    }

    if (Movies.length === 0) {
        FetchMovies()
        return null
    }

    const SavedMovies = []

    Movies.forEach(
        Movie => {
            if (localStorage[`MovieFavourite-${Movie.id}`] === "true") {
                SavedMovies.push(Movie)
            }
        }
    )

    if (SavedMovies.length == 0) {
        return (
            <div className="SavedView">
                <div className='nosaved'>
                    <img src={FrownImage} />
                    <h6>Looks like you do not have any saved movies at this time!</h6>
                </div>
            </div>
        )
    }

    return (
        <div className="SavedView">
            <h1>Movies that you have saved</h1>
            <div className='cardlist'>
                {
                    (
                        SavedMovies.map(
                            Movie => {
                                return (
                                    <MovieCard
                                        key={Movie.id}
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

export default SavedView;