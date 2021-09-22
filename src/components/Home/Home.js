import React , { useEffect } from 'react';
import "./Home.scss";
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies , fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch])
    return (
     <React.Fragment>
        <div className="banner-img"></div>
        <MovieListing />
     </React.Fragment>    
    );
};

export default Home;