import React, { useEffect, useState } from 'react';
import './div_table.css';
const API = 'http://localhost:3000/movies/';

export default function DivTable() {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        fetch(API).then((result) => {
            result.json().then((resp) => {
                // console.warn('result', resp);
                setMoviesData(resp);
            })
        })
    }, []);

    return (
        <>
            <table className="table movies-list">
                <thead>
                    <tr>
                        <td>Month</td>
                        <td>Poster</td>
                        <td>Title</td>
                        <td>Released</td>
                        <td>Rating</td>
                        {/* <td>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Poster</td>
                                        <td>Title</td>
                                        <td>Released</td>
                                        <td>Rating</td>
                                    </tr>
                                </thead>
                            </table>
                        </td> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        moviesData.map((day) => (
                            <tr key={day.date} className='movie-day'>
                                <td>
                                    <h2>
                                        {new Date(day.date).toLocaleDateString("default", {
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </h2>
                                </td>
                                {day.movies.map((movie) => (
                                    <>
                                        <td>
                                            <img src={movie.poster} alt={movie.title} className='poster' />
                                        </td>
                                        <td> {movie.title} </td>
                                        <td> {movie.released} </td>
                                        <td> {movie.Ratings[0].value} </td>
                                    </>
                                ))}
                                {/* <td>
                                <table>
                                    <tbody>
                                        {day.movies.map((movie) => (
                                            <tr key={movie.imdb_id} className="movie">
                                                <td>
                                                    <img src={movie.poster} alt={movie.title} />
                                                </td>
                                                <td> {movie.title} </td>
                                                <td> {movie.released} </td>
                                                <td> {movie.Ratings[0].value} </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
