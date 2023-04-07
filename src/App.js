import {useEffect, useState} from "react";
import "./App.css";
import SearchIcon from './Search.svg'
import MovieCard from "./MovieCard";


// //  9cb396ac

const API_URL = 'http://www.omdbapi.com?apikey=9cb396ac';




const App = () => {

       const [movies, setMovies] = useState([]);

       const [searchTerm, setSearchTerm] = useState('')
    
       const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s={title}`);

        const data = await response.json();

        console.log(data.Search)

        setMovies(data.Search)
       }

        useEffect(() =>{

           searchMovies('');

        }, []);

        
         

    return(
        
        <div className="app">
            <h1>Movies U Love</h1>
            <div className="search">
            <input
            placeholder="search for a movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

            />
            <img
            src={SearchIcon}
            alt="search" 
            onClick={ () => {}}
            key = {SearchIcon.id}
            />
        </div>

        {
            movies?.length > 0 ? (
            
            <div className="container">
             
             {movies.map((movie) => (
              
              <MovieCard movie={movie} key={movie.imdbID} />

             ))}

            
            </div>) : (

               <div className="empty">
               <h2>No Movie Found</h2>
               </div>
            )
        }
        </div> 
        
    );
}

export default App;