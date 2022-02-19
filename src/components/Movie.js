import { useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardContent from "@mui/material/CardContent";
import {API} from  "./global";



export function Movie({ banner, title, rating, summary, id,movieid }) {
  const [like, setlike] = useState(0);
  const [dislike, dellike] = useState(0);

  const [show, setshow] = useState(false);
  // const summarystyles ={
  //     display : show  ? "block": "none",
  //
  const history = useHistory();

  const [copymovie, SetMovies] = useState([]);

  const getmovies=(movieid)=>{
    fetch(`${API}`,{method :"GET"}
    ).then((data)=>data.json()).then((res)=>SetMovies(res))
  }
  
  useEffect(()=>getmovies(),[])


  const deletemovie=(movieid)=>{
    console.log(movieid)
    fetch(`${API}/${movieid}`,{method :"DELETE"}).then(()=>getmovies()); 
  }
  return (
    <div>
      <div id="movie-card" className="card mt-sm-3">
        <img src={banner} className="card-img-top " alt="..."></img>
        <div className="card-body">
          <CardContent>
            <div className="title-rating">
              <h5 className="card-title">
                {title}
                {show === true ? (
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      setshow(!show);
                    }}
                  ></KeyboardArrowUpIcon>
                ) : (
                  <KeyboardArrowDownIcon
                    onClick={() => {
                      setshow(!show);
                    }}
                  ></KeyboardArrowDownIcon>
                )}
                <i
                  onClick={() => {
                    history.push(`/movies/${movieid}`);
                  }}
                  class="bi bi-info-circle text-primary"
                ></i>
              </h5>

              <p className="card-text">
                {rating}
                <i class="bi bi-star-half"></i>
              </p>
            </div>

            {/* <p style={summarystyles} className="card-text">{summary}</p> */}
            {show ? <p className="card-text">{summary}</p> : ""}

            <div className="like">
              <button className="btn like-button">
                <i
                  onClick={() => {
                    setlike(like + 1);
                  }}
                  className="fa fa-thumbs-o-up"
                >
                  <h6>{like}</h6>
                </i>
              </button>

              <button className="btn dislike-button">
                <i
                  onClick={() => {
                    dellike(dislike + 1);
                  }}
                  className="fa fa-thumbs-o-down"
                >
                  <h6>{dislike}</h6>
                </i>
              </button>

              <i
                style={{ marginLeft: "auto" }}
                className="bi bi-pencil-fill text-success"
                onClick={() => history.push(`/movies/edit/${movieid}`)}
              ></i>

              <span className="delete-button text-danger"><i
                    onClick={() => deletemovie(movieid)}
                    class="bi bi-trash3  ml-2"
                  ></i></span>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
