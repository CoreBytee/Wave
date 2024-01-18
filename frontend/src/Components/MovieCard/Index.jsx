import './Index.css'

function MovieCard(
    {
        Id,
        Title,
        ImgUrl = "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    }
) {
    return (
        <div className="MovieCard">
            <img src={ImgUrl}></img>
        </div>
    )
}

export default MovieCard