const API_KEY="5ab9497f497a65d2b635d47429d60032"
const BASE_URL="https://api.themoviedb.org/3"

export const popularMovies=async ()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data=await response.json()
    return data.results
}


export const SearchMovies=async (query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data=await response.json()
    return data.results
}