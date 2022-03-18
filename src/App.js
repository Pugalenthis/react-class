import "./components/ColorApp.js";
import "./Styles/ColorApp.css";
import "./App.css";
import { useState} from "react";
import { Switch, Route,Redirect,useHistory} from "react-router-dom";
import { Notfound } from "./components/Notfound";
import { Setcolor } from "./components/Setcolor";
import { Moviedetails } from "./components/Moviedetails";
import { Tictactoe } from "./components/Tictactoe.js";
import { Mainmovie } from "./components/Mainmovie.js";
import { imovies } from "./components/imovies.js";
import { Editmovie } from "./components/Editmovie.js";
import { Home } from "./components/Home";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BasicForm } from "./BasicForm";

 


function App() {
  
  const [copymovie, SetMovies] = useState([]);

  
  const history = useHistory();

  const[mode,setmode]=useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{borderRadius:"0px",minHeight:"100vh"}} elevation={4} >
      <div className="App">

        <AppBar position="static">
        <Toolbar>
        <Button color="inherit"onClick={()=>history.push("/")}  >Home</Button>
          <Button color="inherit"onClick={()=>history.push("/colorgame")}  >Color game</Button>
          <Button color="inherit" onClick={()=>history.push("/tictactoe")} >Tictactoe game</Button>
          <Button color="inherit" onClick={()=>history.push("/movies")} >Movies</Button>
          {/* <Button color="inherit" onClick={()=>history.push("/basicform")} >Basicform</Button> */}

          
          <Button style={{marginLeft : "auto"}} color="inherit"
          startIcon ={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
           onClick={()=>setmode(mode==="light"?"dark":"light")} >{mode==="dark"?"Light" : "Dark"}mode</Button> 

        </Toolbar>
      </AppBar>

        <div className="route-container">
          <Switch>
          <Route  path="/tictactoe">
                  <Tictactoe />
            </Route>
            {/* <Route  path="/basicform">
                  <BasicForm />
            </Route> */}
            
          
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/movies/:id">
              <Moviedetails copymovie={copymovie} SetMovies={SetMovies} />
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
      </Paper>
    </ThemeProvider>
  );
}


export default App;






