import React, { useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from "axios";
import { useState } from 'react';
const MustWatch = (props) => {
    const [users_collection, setUsersCollection] = useState([]);
    useEffect(() => {

        const getdataHander = async () => {
            const response = await axios.get("https://api.themoviedb.org/3/movie/"+props.type+"?api_key=15ef5245d69c4b0dc21fc692e632172c")
            setUsersCollection(response.data.results);
        }
        getdataHander();

    }, []);


    return (
        <div>
            {users_collection ? <MovieCard movielist ={users_collection}  setMovielist={setUsersCollection} movietype={props.type} movietitle={props.title}/> : 'no movies'}
        </div>
    )
}

export default MustWatch