import React, { useEffect, useState } from 'react';
import './div_style.css';
const API = 'http://localhost:3000/movies/';

export default function DivData() {

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
            <div className="movies-list">
                {moviesData.map((day) => (
                    <div key={day.date} className='movie-day'>
                        <h2>
                            {new Date(day.date).toLocaleDateString("default", {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </h2>
                        <div className="movies">
                            {day.movies.map((movie) => (
                                <div key={movie.imdb_id} className="movie">
                                    <img src={movie.poster} alt={movie.title} />
                                    <div className="movie-info">
                                        <h3>{movie.title}</h3>
                                        <p>Released: {movie.released}</p>
                                        <p>Rating: {movie.Ratings[0].value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
