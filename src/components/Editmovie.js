import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { API } from "./global";
import CircularProgress from '@mui/material/CircularProgress';


export function Editmovie() {
  const history = useHistory();

  const { id } = useParams();

  const [copymovie,SetMovies]= useState(null)

  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetMovies(res))
      .catch((error) => console.log(error));
  }, []);

  const Editcopymovie = copymovie;

  console.log(Editcopymovie);

  
  return (
    <div>
      {copymovie ? <Editmovieform Editcopymovie={Editcopymovie}/> : <CircularProgress style={{position : "absolute",top :"45%",left:"45%",width:"50px",height:"50px"}} />}
    </div>
  );
}


function Editmovieform({Editcopymovie={Editcopymovie}}){

  const [title, SetTitle] = useState(Editcopymovie.title);
  const [url, SetUrl] = useState(Editcopymovie.banner);
  const [rating, SetRating] = useState(Editcopymovie.rating);
  const [trailer, SetTrailer] = useState(Editcopymovie.trailer);
  const [summary, SetSummary] = useState(Editcopymovie.summary);

  return(
    <div class="container">
      <div class="movie-app">
        <div className="inputs" id="editmovie-inputs">
          <TextField
            className="input-box"
            value={title}
            size="medium"
            onChange={(val) => {
              SetTitle(val.target.value);
            }}
            id="outlined-basic"
            label="Enter your movie title"
            variant="outlined"
          />

          <TextField
            className="input-box"
            value={url}
            size="medium"
            id="outlined-basic"
            onChange={(val) => {
              SetUrl(val.target.value);
              console.log(url);
            }}
            label="Enter your movie image url"
            variant="outlined"
          />

          <TextField
            className="input-box"
            value={trailer}
            size="medium"
            id="outlined-basic"
            onChange={(val) => {
              SetTrailer(val.target.value);
              console.log(url);
            }}
            label="Enter your movie trailer"
            variant="outlined"
          />

          <TextField
            className="input-box"
            value={rating}
            size="medium"
            id="outlined-basic"
            onChange={(val) => {
              SetRating(val.target.value);
            }}
            label="Enter your movie rating"
            variant="outlined"
          />

          <TextField
            className="input-box"
            value={summary}
            size="medium"
            id="outlined-basic"
            onChange={(val) => {
              SetSummary(val.target.value);
            }}
            label="Enter your movie summary"
            variant="outlined"
          />

          <button
            type="submit"
            onClick={() => {
              const updatedmovie = {
                title: title,
                banner: url,
                trailer:trailer,
                rating: rating,
                summary: summary,
              };
              
              fetch(`${API}/${Editcopymovie.id}`, {
                method: "PUT",
                body: JSON.stringify(updatedmovie),
                headers: {
                  "Content-Type": "application/json",
                },
              })
             
            }}
            className="btn bg-primary add-movie-button"
          >
            Save Movie
          </button>
        </div>
      </div>
    </div>
  )
}

  

