import React, { useEffect, useState } from 'react';
const API = 'http://localhost:3000/movies/';
// import MovieData from './MovieData.js';

export default function TableData() {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json(res);
            if (data.length > 0) {
                // console.log('data', data);

                // const moviesList = data.map((movie) => {
                //     // console.log('movie', movie);
                //     console.log('movies', movie.movies);
                //     return movie.movies;
                // });

                const moviesList = [];

                for (let i = 0; i < data.length; i++) {
                    moviesList.push(data[i].movies); // data[0].movies
                }

                console.log(moviesList);

                setMovies(moviesList);
            }
        } catch (errorMessage) {
            console.error(errorMessage);
        }
    }

    useEffect(() => {
        fetchMovies(API);
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Released</th>
                        <th>Year</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie) => {
                            movie.map((mov) => {
                                const { imdb_id, title, released, year, imdb_rating } = mov;

                                return (
                                    <tr key={imdb_id}>
                                        <td><h1> {mov.title} </h1></td>
                                        <td> {title} </td>
                                        <td> {released} </td>
                                        <td> {year} </td>
                                        <td> {imdb_rating} </td>
                                    </tr>
                                )
                            });
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
