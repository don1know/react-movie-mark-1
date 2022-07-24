import "./app.css"
import { Routes,Route } from "react-router-dom";
import Head from './components/Head';
import Home from './components/Home';


import Player from './components/player/Moon'




function App() {
  
  return (<>
  <Head />
<Routes>


<Route path="/"  element={ <Home/> } />

<Route path="playermoon"  element={ <Player/> } />
</Routes>



  </>);
}

export default App;
