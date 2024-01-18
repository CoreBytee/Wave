import './MovieLead.css'
import {useEffect, useState} from "react";

function MovieLead(props) {
    const [movieDetails, setMovieDetails] = useState(false);

    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    const loadMovie = ()=>{
        fetch(props.url)
            .then((res)=>res.json())
            .then((json)=>{
                let details = json[0];
                details.trailer = "//www.youtube.com/embed/" + getId(details.trailer) + '?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&loop=1&playsinline=1&rel=0&enablejsapi=1&playlist' + getId(details.trailer);


                setMovieDetails(details)
            });

        
    };

    useEffect(() => {
        return () => {
            loadMovie()
        };
    }, []);

    return (
        <div className="movie-lead">
            {movieDetails && <div >
                <div className={'lead-content'}>
                    <h3>{movieDetails.directors}</h3>
                    <h2>{movieDetails.name}</h2>
                    <p>{movieDetails.description}</p>
                    <div className={'lead-bar'}>
                        <div>
                            <button className={'btn btn-light btn-lg m-3'}>Play</button>
                            <button className={'btn btn-secondary btn-lg'}>More info</button>
                        </div>
                        <div>
                            <button className={'btn btn-secondary btn-lg'}>Kijkwijzer</button>
                        </div>
                    </div>
                </div>
                <div className="youtube-container">
                    <iframe className={'lead-trailer'} width="100%" height="315" src={movieDetails.trailer}
                            title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>}

        </div>
    )
}

export default MovieLead