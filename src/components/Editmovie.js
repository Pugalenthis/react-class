import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { API } from "./global";
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from "formik";
import * as yup from "yup";

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

const editmvoievalidationschema =yup.object({
  name :yup.string().required("please enter valid name"),
  poster : yup.string().required("please enter valid poster"),
  rating : yup.number().required("please enter valid rating").min(0,"minimum 0").max(10,"maxiumum 10"),
  trailer: yup.string().required("please enter valid trailer").min(4,"minimum 4 character"),
  summary : yup.string().required("please enter valid summary").min(20,"need a longer summary"),

})


function Editmovieform({Editcopymovie={Editcopymovie}}){

  const formik =useFormik({
    initialValues: {name: Editcopymovie.name,poster:Editcopymovie.poster,rating:Editcopymovie.rating,trailer:Editcopymovie.trailer,summary:Editcopymovie.summary},
     validationSchema :editmvoievalidationschema,
     onSubmit : (values)=>{
       console.log("onSubmit",values)
        editmovie(values)
     }
  })

  function editmovie(values){
    console.log(values)
   
      fetch(`${API}/${Editcopymovie.id}`, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
     
   
  }
  

  return(
    <div class="container">
      <div class="movie-app">
        <div >
          <form className="inputs" id="editmovie-inputs" onSubmit={formik.handleSubmit}>
            <TextField
            error={formik.touched.name && formik.errors.name}
            helperText={formik.touched.name && formik.errors.name ? formik.errors.name: ""}
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              className="input-box"
              value={formik.values.name}
                  size="medium"
              id="outlined-basic"
              label="Enter your movie name"
              variant="outlined"
            />
            <TextField
              className="input-box"
              error={formik.touched.poster && formik.errors.poster}
              helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster: ""}
              value={formik.values.poster}            type ="text"
                id="poster"
                name="poster"
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
              size="medium"
              id="outlined-basic"
            
              label="Enter your movie image poster"
              variant="outlined"
            />
            <TextField
            error={formik.touched.trailer && formik.errors.trailer}
            helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer: ""}
            type ="text"
            id="trailer"
            name ="trailer"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              className="input-box"
              value={formik.values.trailer}
              size="medium"
              id="outlined-basic"
            
              label="Enter your movie trailer"
              variant="outlined"
            />
            <TextField
             error={formik.touched.rating && formik.errors.rating}
             helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating: ""}
             type ="number"
              id="rating"
              name ="rating"
              onChange ={formik.handleChange}
            
              onBlur ={formik.handleBlur}
              className="input-box"
              value={formik.values.rating}            size="medium"
              id="outlined-basic"
            
              label="Enter your movie rating"
              variant="outlined"
            />
            <TextField
            error={formik.touched.summary && formik.errors.summary}
            helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary: ""}
              className="input-box"
              type ="text"
              id="summary"
              name ="summary"
            
              onChange ={formik.handleChange}
              onBlur={formik.handleBlur}
              className="input-box"
              value={formik.values.summary}
              size="medium"
              id="outlined-basic"
            
              label="Enter your movie summary"
              variant="outlined"
            />
            <button
              type="submit"
              className="btn bg-primary add-movie-button"
            >
             Save Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

  

