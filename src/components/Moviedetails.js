  import { useParams } from "react-router-dom";
import "../Styles/Moviedetails.css"
import {useEffect,useState} from "react";
import {API} from  "./global";



export function Moviedetails({copymovie={copymovie},SetMovies={SetMovies}}) {
  const { id } = useParams();
 

  console.log(id);
  useEffect(()=>{
    fetch(`${API}movies/${id}`,{method :"GET"}).then((data)=>data.json()).then((res)=> SetMovies(res)).catch((error)=>console.log(error))
  },[])

 

  const moviestyles = {
    width: "100%",
    height: "400px",
    
  };
  const movie = copymovie;
  return (
    <div>
      <div className="container" id="moviedetails-container">
        <div className="row">
            <div className="col-12">
            <iframe width="100%" height="480" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div className="row" id="moviedetails-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      
            <img style={moviestyles} src={movie.poster}></img>
           
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 mt-2 mt-md-0">
          <h3>{movie.name}</h3>
            <p>{movie.rating}<i class="bi bi-star-half"></i></p>
            <p>{movie.summary}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
//