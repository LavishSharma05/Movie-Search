import Home from "./Pages/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Favourite from "./Pages/Favourite"
import Navbar from "./Components/Navbar"
import { MovieProvider } from "./Contexts/moviecontext"


function App() {

  return (
    <MovieProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favourites' element={<Favourite/>}/>
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  )
}

export default App
