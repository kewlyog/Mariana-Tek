import React, { useEffect, useState } from 'react';
const API = 'http://localhost:3000/movies/';
// import MovieData from './MovieData.js';

export default function TableData() {

    // useEffect(() => {
    //     fetch("http:/ /localhost:4000/todo").then((result) =›{
    //         result.json().then((resp) =›{
    //             console.warn("result", resp)
    //         })
    //     })
    // }, []);

    const [moviesList, setMoviesList] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API).then((result) => {
            result.json().then((resp) => {
                // console.warn('result', resp);
                setMovies(resp);
            })
        })
    }, []);

    // const [date, mov] = moviesList.map((movie) => {
    //     console.log(movie);
    // });

    // console.log(typeof (date));

    // date.map((d) => {
    //     console.log(d);
    // })

    //console.log(date);
    //console.log(mov);

    console.log('movies', movies);

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
                            // movie.map((mov) => {
                            const { imdb_id, title, released, year, imdb_rating } = movie;

                            return (
                                <tr key={movie.date}>
                                    <td> {movie.date} </td>
                                    <td> {title} </td>
                                    <td> {released} </td>
                                    <td> {year} </td>
                                    <td> {imdb_rating} </td>
                                </tr>
                            )
                            // });
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
