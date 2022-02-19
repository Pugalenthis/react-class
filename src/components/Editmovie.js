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
  title :yup.string().required("please enter valid title"),
  url : yup.string().required("please enter valid url"),
  rating : yup.number().required("please enter valid rating").min(0,"minimum 0").max(10,"maxiumum 10"),
  trailer: yup.string().required("please enter valid trailer").min(4,"minimum 4 character"),
  summary : yup.string().required("please enter valid summary").min(20,"need a longer summary"),

})


function Editmovieform({Editcopymovie={Editcopymovie}}){

  const formik =useFormik({
    initialValues: {title: Editcopymovie.title,url:Editcopymovie.banner,rating:Editcopymovie.rating,trailer:Editcopymovie.trailer,summary:Editcopymovie.summary},
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
            error={formik.touched.title && formik.errors.title}
            helperText={formik.touched.title && formik.errors.title ? formik.errors.title: ""}
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              className="input-box"
              value={formik.values.title}
                  size="medium"
              id="outlined-basic"
              label="Enter your movie title"
              variant="outlined"
            />
            <TextField
              className="input-box"
              error={formik.touched.url && formik.errors.url}
              helperText={formik.touched.url && formik.errors.url ? formik.errors.url: ""}
              value={formik.values.url}            type ="text"
                id="url"
                name="url"
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
              size="medium"
              id="outlined-basic"
            
              label="Enter your movie image url"
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

  

