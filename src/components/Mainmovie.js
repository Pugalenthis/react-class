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
    fetch(`${API}`, { method: "GET" })
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
  title :yup.string().required("please enter valid title"),
  url : yup.string().required("please enter valid url"),
  rating : yup.number().required("please enter valid rating").min(0,"minimum 0").max(10,"maxiumum 10"),
  trailer: yup.string().required("please enter valid trailer").min(4,"minimum 4 character"),
  summary : yup.string().required("please enter valid summary").min(20,"need a longer summary"),

})


function  Addmovieform({copymovie,SetMovies}){
  
  const formik =useFormik({
    initialValues: {title:"",url:"",rating:"",trailer:"",summary:""},
     validationSchema :addmvoievalidationschema,
     onSubmit : (values)=>{
       console.log("onSubmit",values)
       createmovie(values);
     }
  })
 
  const history= useHistory();

  // const [title, SetTitle] = useState();
  // const [url, SetUrl] = useState();
  // const [rating, SetRating] = useState();
  // const [summary, SetSummary] = useState();
  // const [trailer, SetTrailer] = useState();
  return(
    <div class="container">
      <div class="movie-app">
        <h1>Add your favourite movie</h1>
       
          <form className="inputs" onSubmit={formik.handleSubmit}>
      
            <TextField
            error={formik.touched.title && formik.errors.title}
            helperText={formik.touched.title && formik.errors.title ? formik.errors.title: ""}
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
              className="input-box"
              size="medium"
              id="outlined-basic"
              label="Enter your movie title"
              variant="outlined"
            />
            <TextField 
            error={formik.touched.url && formik.errors.url}
            helperText={formik.touched.url && formik.errors.url ? formik.errors.url: ""}
              className="input-box"
             
              type ="text"
              id="url"
              name="url"
              onChange ={formik.handleChange}
              onBlur ={formik.handleBlur}
              value={formik.values.url}
              size="medium"
              id="outlined-basic"
              
              label="Enter your movie image url"
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
              //   //   title: title,
              //   //   banner: url,
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
                banner={info.banner}
                title={info.title}
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
