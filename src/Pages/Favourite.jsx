import React from 'react'
import './Favourite.css'
import { useMovieContext } from '../Contexts/moviecontext'
import MovieCard from '../Components/MovieCard'


function Favourite() {
    const {favourites}=useMovieContext()

    if(favourites){
        return <div className='movie-grid'>
        {favourites.map((item)=>(
             <MovieCard key={item.id} movie={item}/>
        ))}
        </div>
    }

     
     else{   return (
        <div className="favourite">
            <h1>No favourites yet</h1>
        </div>
     
    )
}
}

export default Favourite
