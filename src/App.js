import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from '../CineSearch/src/components/header/Header';
import Home from '../CineSearch/src/pages/home/home';
import MovieList from '../CineSearch/src/components/movieList/movieList';
import Movie from '../CineSearch/src/pages/movieDetail/movie';
import SearchMovies from '../CineSearch/src/components/movieList/searchMovie';
import TvShowsList from '../CineSearch/src/components/movieList/tvshowslist';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="tv" element={<TvShowsList />}></Route>
                <Route path="search" element={<SearchMovies />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
