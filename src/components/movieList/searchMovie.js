import React, {useEffect, useState} from "react"
import "./movieList.css"
// import { useParams } from "react-router-dom"
import Cards from "../card/card"

// const delay = ms => new Promise(
//     resolve => setTimeout(resolve, ms)
// );

const SearchMovies = () =>{
    const query = document.getElementById('query').value;

    const [movieList1, setMovieList1] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    // const {query} = useParams();


    useEffect(() => {
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then(res => res.json())
            .then(data => setMovieList1(data.results))
        }
        getData()
    })

    // const getData = () => {
        // fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=4e44d9029b1270a757cddc766a1bcb63`)
        // .then(res => res.json())
        // .then(data => setMovieList1(data.results))
    // }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, []) 

    if(isLoading){
        return (
            <div className="list__title">
                Loading
            </div>
        )
    }
    else if(movieList1.length === 0){
        return (
            <div>
                <div className="oops">
                    OOPS! NO RESULTS FOUND <br/>
                    please check your spelling
                </div>
                <div id="menu">
                </div>
            </div>
        )
    }

    else{
        return (
            <div className="movie__list">
            <h2 className="list__title">{`Search Results for ${query}`}</h2>
            <div className="list__cards">
                {
                    movieList1.map(movie => (
                        <Cards movie={movie} key={movie.id}/>
                    ))
                    // movieList1.map(movie => (
                    //     <Cards movie={movie} />
                    // ))
                }
            </div>
        </div>
        )
    }
}

export default SearchMovies;