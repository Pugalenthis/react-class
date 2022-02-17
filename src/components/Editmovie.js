import { useState } from "react";
import { Movie } from "./Movie";
import {useParams,useHistory} from  "react-router-dom";
import TextField from "@mui/material/TextField";


export function Editmovie({ copymovie, SetMovies }) {
 const history = useHistory();

  const {id}=useParams();

  const Editcopymovie =copymovie[id]

  console.log(copymovie,id,Editcopymovie)

  const [title, SetTitle] = useState(Editcopymovie.title);
  const [url, SetUrl] = useState(Editcopymovie.banner);
  const [rating, SetRating] = useState(Editcopymovie.rating);
  const [summary, SetSummary] = useState(Editcopymovie.summary);
  return (
    <div class="container" >
      <div class="movie-app">
        <div className="inputs" id="editmovie-inputs">
        <TextField className="input-box"value={title}  size="medium"
            onChange={(val) => {
              SetTitle(val.target.value);
            }}
            id="outlined-basic"
            label="Enter your movie title"
            variant="outlined"/>

          <TextField className="input-box" value={url} size="medium"
            id="outlined-basic"
            onChange={(val) => {
              SetUrl(val.target.value);
              console.log(url);
            }}
            label="Enter your movie image url"
            variant="outlined"/>

          <TextField className="input-box" value={rating} size="medium" id="outlined-basic" onChange={(val) => {
              SetRating(val.target.value);
            }} label="Enter your movie rating" variant="outlined" />

          <TextField className="input-box" value={summary} size="medium" id="outlined-basic" onChange={(val) => {
              SetSummary(val.target.value);
            }} label="Enter your movie summary" variant="outlined" />
            
          <button
            type="submit"
            onClick={() => {
              const updatedmovie = {
                title: title,
                banner: url,
                rating: rating,
                summary: summary,
              };
               copymovie[id]=updatedmovie;
               SetMovies(copymovie)
              history.push("/movies")
            }}
            className="btn bg-primary add-movie-button">Save Movie</button>

         
        </div>
      </div>
    </div>
  );
}
