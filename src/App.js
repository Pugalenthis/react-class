import "./components/ColorApp.js";
import "./Styles/ColorApp.css";
import "./App.css";
import { useState } from "react";
import { Switch, Route, Link, Redirect,useHistory} from "react-router-dom";
import { Notfound } from "./components/Notfound";
import { Setcolor } from "./components/Setcolor";
import { Moviedetails } from "./components/Moviedetails";
import { Tictactoe } from "./components/Tictactoe.js";
import { Mainmovie } from "./components/Mainmovie.js";
import { imovies } from "./components/imovies.js";
import { Editmovie } from "./components/Editmovie.js";
import { Home } from "./components/Home";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  const [copymovie, SetMovies] = useState(imovies);
  const history = useHistory();
  return (
    <div>
      <div className="App">

        <AppBar position="static">
        <Toolbar>
        <Button color="inherit"onClick={()=>history.push("/")}  >Home</Button>
          <Button color="inherit"onClick={()=>history.push("/colorgame")}  >Color game</Button>
          <Button color="inherit" onClick={()=>history.push("/tictactoe")} >Tictactoe game</Button>
          <Button color="inherit" onClick={()=>history.push("/movies")} >Movies</Button> 
        </Toolbar>
      </AppBar>

        <Switch>
        <Route  path="/tictactoe">
                <Tictactoe />
          </Route>
              
          <Route exact path="/">
              <Home />
          </Route>

          <Route exact path="/movies/:id">
            <Moviedetails copymovie={copymovie} />
          </Route>

          <Route exact path="/movies/edit/:id">
            
            <Editmovie copymovie={copymovie} SetMovies={SetMovies}/>
          </Route>

          <Route path="/movies">
              <Mainmovie copymovie={copymovie} SetMovies={SetMovies}/>
          </Route>

          <Route path="/films">
            <Redirect to="/movies" />
          </Route>

          <Route path="/colorgame">
                <Setcolor />
          </Route>

          <Route path="**">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}



export default App;

// Exact keyword in react;
// <Route exact path="/">
//             <div className="container">
//               <div className="row">
//                 <h1>Welcome to 3 in 1 game</h1>
//               </div>
//             </div>
// </Route>

// not found route path
// <Route path="**">
//   <Notfound />
// </Route>

//  readirecting
//   <Route path="/films">
//   <Redirect to="/movies" />
// </Route>

// passing jsx in props ;
//         <div class="container">
//         <div class="row" id="movie-row">
//           {copymovie.map((info) => (
//             <Movie
//               banner={info.banner}
//               title={info.title}
//               rating={info.rating}
//               summary={info.summary}
//               deletebutton={<button>Delete me🧨🧨</button>}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// {copymovie.map((info) => (
//   <Movie
//     banner={info.banner}
//     title={info.title}
//     rating={info.rating}
//     summary={info.summary}
//     deletebutton={<button>Delete me🧨🧨</button>}
//   />
// ))}

// DELETING A SPECIFIC MOVIE FROM MOVIE Array;

// {copymovie.map((info,index) => (
//   <Movie
//     banner={info.banner}
//     title={info.title}
//     rating={info.rating}
//     summary={info.summary}
//     deletebutton={<button onClick={()=>{
//       console.log(index)
//       const copycopymovies= [...copymovie]
//       copycopymovies.splice(index,1)
//       SetMovies(copycopymovies)
//     }
//     }>Delete me🧨🧨</button>}
// />
// ))}

// if want to change url by clicking button please use -use history

// const history =useHistory();

// index=id

// export function Movie({ banner, title, rating, summary,deletebutton,id }) {

// import { useHistory } from 'react-router-dom';

// <h5 className="card-title">{title}{show === true ? <i onClick={() => { setshow(!show); }} class="bi bi-caret-down"></i> : <i onClick={() => { history.push(`/movies${id}`); }} class="bi bi-caret-up"></i>}<i class="bi bi-info-circle"></i> </h5>
