import { useParams } from "react-router-dom";
import "../Styles/Moviedetails.css"

export function Moviedetails({ copymovie }) {
  const { id } = useParams();

  console.log(id, copymovie);
  const moviestyles = {
    width: "300px",
    height: "300px"
  };
  const movie = copymovie[id];
  return (
    <div>
      <div className="container" id="moviedetails-container">
        <div className="row" id="moviedetails-row">
          <div className="col-4">
            {/* <iframe width="853" height="480" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <img style={moviestyles} src={movie.banner}></img>
           
          </div>
          <div className="col-8">
          <h3>{movie.title}</h3>
            <p>{movie.rating}<i class="bi bi-star-half"></i></p>
            <p>{movie.summary}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
