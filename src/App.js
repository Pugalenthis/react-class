import "./ColorApp.js";
import "./ColorApp.css";
import "./App.css";
import { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Notfound } from "./Notfound";
import { Setcolor } from "./Setcolor";
import { Moviedetails } from "./Moviedetails";
import { Tictactoe } from "./Tictactoe.js";
import { Mainmovie } from "./Mainmovie.js";
import { imovies } from "./imovies.js";


function App() {
  const [copymovie, SetMovies] = useState(imovies);
  return (
    <div>
      <div className="App">
        <ul>
          <li className="linktolist">
            <Link to="/">Home</Link>
          </li>
          <li className="linktolist">
            <Link to="/movies">movies</Link>
          </li>
          <li className="linktolist">
            <Link to="/colorgame">Colorgame</Link>
          </li>
          <li className="linktolist">
            <Link to="/tictactoe">Tictactoe game</Link>
          </li> 
        </ul>

        <Switch>
        <Route  path="/tictactoe">
                <Tictactoe />
          </Route>
              
          <Route exact path="/">
            <div className="container">
              <div className="row">
                <h1>Welcome to 3 in 1 game</h1>
              </div>
            </div>
          </Route>

          <Route exact path="/movies/:id">
            <Moviedetails copymovie={copymovie} />
          </Route>

          <Route path="/movies">
              <Mainmovie copymovie={copymovie} SetMovies={SetMovies}/>
          </Route>

          <Route path="/films">
            <Redirect to="/movies" />
          </Route>

          <Route path="/colorgame">
            <div class="container" id="colorgame-container">
              <div class="row" id="colorgame-row">
                <Setcolor />
              </div>
            </div>
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
