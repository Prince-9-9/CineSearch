import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={require('./logo.png')} alt = "Cine_Search" /></Link>
            </div>
            <div className="headerCenter">
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span className="heading">Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span className="heading">Top&nbsp;Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span className="heading">Upcoming</span></Link>
                <Link to="/tv" style={{textDecoration: "none"}}><span className="heading">Tv&nbsp;Shows</span></Link>
            </div>
            <div className="search-container headerRight">
                <form>
                    <input type="text" id="query" placeholder="Enter Movie name"/>
                    <Link to="/search">
                        <button className="btn" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                        {/* <img src="images/Iconsearch.png" alt="search icon"/> */}
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Header