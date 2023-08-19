import React from 'react';
import moviesData from '../movies.json';
// import { Movies } from './moviesData.js';

export default function OrderedList() {
    const moviesFromJson = moviesData;

    // console.log('movies data', moviesFromJson);
    // console.log('title', moviesFromJson[0].movies[0].title);
    return (
        <>
            <input placeholder='search...' type="text" className="search" />
            <ul className="list">
                {
                    moviesFromJson.map((movieData) => (
                        movieData.movies.map((movie) => (
                            <li key={movie.imdb_id} className="listItem"> {movie.title} </li>
                        ))
                    ))
                }
            </ul>
        </>
    )
}
