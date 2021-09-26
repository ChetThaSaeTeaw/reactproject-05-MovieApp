import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './Header.scss';

const Header = () => {
    const [term , setTerm] = useState("");
    const dispatch = useDispatch();
    const profilePic = 'https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png';
    const submitHandler = e => {
        e.preventDefault();
        if (term === "") return alert("Please enter search now!")
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    };
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Moive App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Search Moives or Shows...." value={term} onChange={e => setTerm(e.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={profilePic} alt="profilePic" />
            </div>
        </div>
    );
};

export default Header;