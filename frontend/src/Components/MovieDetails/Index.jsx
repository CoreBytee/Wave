import { useEffect as UseEffect, useRef as UseRef, useState as UseState } from 'react'

import './Index.css'

function MovieDetails(
    {
        Id = 0,
        Visible = false,
        SetVisible
    }
) {
    const [FavouriteState, SetFavouriteState] = UseState(localStorage[`MovieFavourite-${Id}`] || false)
    const [MovieDetails, SetMovieDetails] = UseState({})

    function ToggleFavourite() {
        SetFavouriteState(!FavouriteState)
        localStorage[`MovieFavourite-${Id}`] = !FavouriteState
    }

    async function FetchMovieDetails() {
        const MovieDetailsResponse = await fetch(`https://annexbios.gluwebsite.nl/api/main.php?id=${Id}`)
        const MovieDetailsData = await MovieDetailsResponse.json()
        const MovieDetail = MovieDetailsData[0]
        if (!MovieDetail) {
            SetVisible(false)
            return
        }
        SetMovieDetails(MovieDetail)
    }

    if (Object.keys(MovieDetails).length === 0) {
        FetchMovieDetails()
        return null
    }
    
    let TrailerEmbedLink = ""
    if (MovieDetails.trailer.startsWith("https://www.youtube.com/watch?v=") || MovieDetails.trailer.startsWith("https://youtu.be/")) {
        const TrailerId = MovieDetails.trailer.replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "")
        TrailerEmbedLink = `https://www.youtube-nocookie.com/embed/${TrailerId}?playlist=${TrailerId}&autoplay=1&mute=1&controls=0&loop=1`
    }

    let FavouriteButton
    if (FavouriteState) {
        FavouriteButton = <button type="button" className="btn btn-success" onClick={ToggleFavourite}><i className="bi bi-heartbreak-fill"></i> Unfavourite</button>
    } else {
        FavouriteButton = <button type="button" className="btn btn-success" onClick={ToggleFavourite}><i className="bi bi-heart-fill"></i> Favourite</button>
    }

    return (
        <div className={`MovieDetails ${Visible ? "shown" : ""}`}>
            <div className='Container'>
                <div className='details'>
                    <i className="bi bi-x-lg closebutton" onClick={() => {SetVisible(false)}}></i>
                    <iframe src={TrailerEmbedLink} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className='textcontainer'>
                        <h1>{MovieDetails.name}</h1>
                        <div className='actionrow'>
                            <button type="button" className="btn btn-success"><i className="bi bi-play-fill"></i>Watch</button>
                            {FavouriteButton}
                        </div>
                    </div>
                </div>
                <div className='description'>
                    <h3>Description</h3>
                    <p dangerouslySetInnerHTML={{__html: MovieDetails.description.replaceAll("\\n", "<br>") + "..."}}></p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails