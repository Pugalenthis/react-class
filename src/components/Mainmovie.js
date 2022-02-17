import { useState } from "react";
import { Movie } from "./Movie";
import TextField from "@mui/material/TextField";

export function Mainmovie({ copymovie, SetMovies }) {
  const [title, SetTitle] = useState();
  const [url, SetUrl] = useState();
  const [rating, SetRating] = useState();
  const [summary, SetSummary] = useState();

  return (
    <div class="container">
      <div class="movie-app">
        <h1>Add your favourite movie</h1>
        <div className="inputs">
          <TextField
            className="input-box"
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
              const addmovie = {
                title: title,
                banner: url,
                rating: rating,
                summary: summary,
              };

              SetMovies([...copymovie, addmovie]);
            }}
            className="btn bg-primary add-movie-button mb-2"
          >
            Add movie
          </button>
        </div>
        <div class="container">
          <div class="row" id="movie-row">
            {copymovie.map((info, index) => (
              <Movie
                banner={info.banner}
                title={info.title}
                rating={info.rating}
                summary={info.summary}
                deletebutton={
                  <i
                    onClick={() => {
                      console.log(index);
                      const copycopymovies = [...copymovie];
                      copycopymovies.splice(index, 1);
                      SetMovies(copycopymovies);
                    }}
                    class="bi bi-trash3  ml-2"
                  ></i>
                }
                id={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
