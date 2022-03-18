import { useState } from "react";
import { Movie } from "./Movie";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { API } from "./global";
import { useHistory } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from "formik";
import * as yup from "yup";


export function Mainmovie() {

  const [copymovie,SetMovies]= useState(null)

  useEffect(() => {
    fetch(`${API}movies`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetMovies(res));
  }, []);

  return (
      <div>
         {copymovie ? <Addmovieform copymovie={copymovie} SetMovies={SetMovies}/> : <CircularProgress style={{position : "absolute",top :"45%",left:"45%" ,width:"50px",height:"50px"}} /> } 
      </div>
  );
}
const addmvoievalidationschema =yup.object({
  name :yup.string().required("please enter valid name"),
  poster : yup.string().required("please enter valid poster"),
  rating : yup.number().required("please enter valid rating").min(0,"minimum 0").max(10,"maxiumum 10"),
  trailer: yup.string().required("please enter valid trailer").min(4,"minimum 4 character"),
  summary : yup.string().required("please enter valid summary").min(20,"need a longer summary"),

})


function  Addmovieform({copymovie,SetMovies}){
  
  const formik =useFormik({
    initialValues: {name:"",poster:"",rating:"",trailer:"",summary:""},
     validationSchema :addmvoievalidationschema,
     onSubmit : (values)=>{
       console.log("onSubmit",values)
       createmovie(values);
     }
  })
 
  const history= useHistory();

  // const [name, Setname] = useState();
  // const [poster, Setposter] = useState();
  // const [rating, SetRating] = useState();
  // const [summary, SetSummary] = useState();
  // const [trailer, SetTrailer] = useState
  return( 
    <div class="container">
      <div class="movie-app">
        <h1>Add your favourite movie</h1>
       
          <form className="inputs" onSubmit={formik.handleSubmit}>
      
            <TextField
            error={formik.touched.name && formik.errors.name}
            helperText={formik.touched.name && formik.errors.name ? formik.errors.name: ""}
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
              className="input-box"
              size="medium"
              id="outlined-basic"
              label="Enter your movie name"
              variant="outlined"
            />
            <TextField 
            error={formik.touched.poster && formik.errors.poster}
            helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster: ""}
              className="input-box"
             
              type ="text"
              id="poster"
              name="poster"
              onChange ={formik.handleChange}
              onBlur ={formik.handleBlur}
              value={formik.values.poster}
              size="medium"
              id="outlined-basic"
              
              label="Enter your movie image poster"
              variant="outlined"
            />
            <TextField
            error={formik.touched.rating && formik.errors.rating}
            helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating: ""}
            type ="number"
             id="rating"
             name ="rating"
             onChange ={formik.handleChange}
             value={formik.values.rating}
             onBlur ={formik.handleBlur}
              className="input-box"
              size="medium"
              id="outlined-basic"
              
              label="Enter your movie rating"
              variant="outlined"
            />
            <TextField
            error={formik.touched.trailer && formik.errors.trailer}
            helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer: ""}
            type ="text"
            id="trailer"
            name ="trailer"
            value={formik.values.trailer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              className="input-box"
              size="medium"
              id="outlined-basic"
              
              label="Enter your movie trailer"
              variant="outlined"
            />
            <TextField
            error={formik.touched.summary && formik.errors.summary}
            helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary: ""}
              className="input-box"
              type ="text"
              id="summary"
              name ="summary"
              value={formik.values.summary}
              onChange ={formik.handleChange}
              onBlur={formik.handleBlur}
              size="medium"
              id="outlined-basic"
              
              label="Enter your movie summary"
              variant="outlined"
            />
            <button
              type="submit"
              // onClick={() => {
              //   // const addmovie = {
              //   //   name: name,
              //   //   banner: poster,
              //   //   rating: rating,
              //   //   summary: summary,
              //   //   trailer:trailer
              //   // };
                // createmovie(addmovie);
              // }}
              className="btn bg-primary add-movie-button mb-2"
            >
              Add movie
            </button>
         
          </form>
        </div>
        <div class="container">
          <div class="row" id="movie-row">
            {copymovie.map((info, index) => (
              <Movie
                poster={info.poster}
                name={info.name}
                rating={info.rating}
                summary={info.summary}
                movieid={info.id}
                
                id={index}
              />
            ))}
          </div>
        </div>
      </div>
  )
}



const createmovie = (addmovie) => {
  fetch(`${API}`, {
    method: "POST",
    body: JSON.stringify(addmovie),
    headers: {
      "Content-Type": "application/json",
    },
  });

};
