import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const api_key = 'ccb3732e6cdf48f3af0f88f3661f8484';

const TvShowsList = () => {
    
    const [tvList0, setTvList0] = useState([])
    // const [movieList1, setMovieList1] = useState([])
    // const [movieList2, setMovieList2] = useState([])
    
    const {type} = useParams()

    // useEffect(() => {
    //     getData()
    // }, [])

    useEffect(() => {
        const getData = () => {
            const page_no = Math.floor(Math.random() * 3) + 1;;
            fetch(`https://api.themoviedb.org/3//discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=vote_count.desc&page=${page_no}&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setTvList0(data.results))
        }
        getData()
    }, [type])

    // const getData = () => {
    //     const page_no = Math.floor(Math.random() * 3) + 1;;
    //     fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?&language=en-US&page=${page_no}&api_key=4e44d9029b1270a757cddc766a1bcb63`)
    //     .then(res => res.json())
    //     .then(data => setMovieList0(data.results))
    // }

    return (
        <div className="movie__list">
            <h2 className="list__title">{('Tv Shows')}</h2>
            <div className="list__cards">
                {
                    tvList0.map(show => (
                        <Cards movie={show} key={show.id} />
                    ))
                    // movieList1.map(movie => (
                    //     <Cards movie={movie} />
                    // ))
                }
            </div>
        </div>
    )
}


export default TvShowsList;