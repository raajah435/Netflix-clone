import React, { useState, useEffect } from 'react'
import axios from "./axios"
import './Row.css'

const base_url= "https://image.tmdb.org/t/p/original"

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
           const request = await axios.get(fetchUrl) 
           console.log(request.data.results);
           setMovies(request.data.results)
           return request;
        }  
        fetchData();
    },[])
  return (
    <div className='Row' >
    <h3>{title}</h3>
    <div className='Row_posters'>
        {movies.map(movie=>{
            return <img key={movie.id} 
            className={`Row_poster ${isLargeRow && "Row_posterLarge"}`}
             src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} 
             alt={movie.name}
             />
    
        })}
    </div>
  </div>
  )
}

export default Row