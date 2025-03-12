import React, { useState,useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
import './Home.css'
import { SearchMovies,popularMovies } from '../services/api'

function Home() {

    const[searchQuery,setsearchQuery]=useState("")
    const [movies,setmovies]=useState([])
    const [error,seterror]=useState(null)
    const [loading,setloading]=useState(true)


    useEffect(()=>{
        const loadPopularMovies = async()=>{
            try{
                const popularMovieList=await popularMovies()
                setmovies(popularMovieList)
            }
            catch(err){
                console.log(err)
                seterror("We cant fetch the movies")
            }

            finally{
                setloading(false)
            }
        }
        loadPopularMovies()
    },[])

    const handleSearch= async (e)=>{
        e.preventDefault()
        if(!searchQuery.trim()) return;
        if(loading) return;

        setloading(true)

        try{
            const searchResult=await SearchMovies(searchQuery)
            setmovies(searchResult)
            seterror(null)
        }
        catch(err){
            seterror("failed to search movie..")
        }

        finally{
            setloading(false)
        }

        setsearchQuery('')

    }


    return (

        <div className='home'>

            <form onSubmit={handleSearch} className='search-form'>
                <input type='text' placeholder='Search For Movies' 
                        className='search-input' 
                        value={searchQuery} 
                        onChange={(e)=>setsearchQuery(e.target.value)
                }/>
                <button type='submit' className='search-button'>Search</button>
            </form>

            {error && <div className='error'>{error}</div>}
            
            {loading? (<div className='loading'>Loading.....</div>):
            
           ( <div className='movie-grid'>
                {movies.map((item)=>{
                    return <MovieCard key={item.id} movie={item}/>
                })}
            </div>)
            
            }
            
        </div>
    )
}

export default Home
