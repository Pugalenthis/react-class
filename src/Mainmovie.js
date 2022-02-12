import {useState} from 'react';
import {Movie} from "./Movie";


export  function Mainmovie({copymovie,SetMovies}) {
 
  const [title, SetTitle] = useState();
  const [url, SetUrl] = useState();
  const [rating, SetRating] = useState();
  const [summary, SetSummary] = useState();

  const newmovie = (title, url, rating, summary) => {
    const addmovie = {
      title: title,
      banner: url,
      rating: rating,
      summary: summary,
    };

    SetMovies([...copymovie, addmovie]);
  };

  return (
    <div class="container">
      <div class="movie-app">
        <h1>Add your favourite movie</h1>
        <div className="inputs">
          <input
            className="form-control"
            onChange={(val) => {
              SetTitle(val.target.value);
            }}
            placeholder="Enter your movie title"
          ></input>
          <input
            className="form-control"
            onChange={(val) => {
              SetUrl(val.target.value);
              console.log(url);
            }}
            placeholder="Enter your movie image url"
          ></input>
          <input
            className="form-control"
            onChange={(val) => {
              SetRating(val.target.value);
            }}
            placeholder="Enter your movie rating"
          ></input>
          <input
            className="form-control"
            onChange={(val) => {
              SetSummary(val.target.value);
            }}
            placeholder="Enter your movie summary"
          ></input>
          <button
            type="submit"
            onClick={() => {
              newmovie(title, url, rating, summary);
            }}
            className="btn bg-primary add-movie-button"
          >
            Add movie
          </button>

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
    </div>
  );
}
