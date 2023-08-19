import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// import { FaStar } from 'react-icons/fa';
import './JsonDataStyle.css';
// import { StarRatings } from './StarRatings';
import { Star } from './Star';
const API = 'http://localhost:3002/movies/';

function getMonth(isoDate) {
    const dateObj = new Date(isoDate);
    const monthNames = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    return monthNames[dateObj.getUTCMonth()];
}

export default function JsonData() {
    const [moviesData, setMoviesData] = useState([]);

    // <FontAwesomeIcon icon="fa-solid fa-calendar" style={{ color: "#d2d7df", }} />

    useEffect(() => {
        fetch(API).then((result) => {
            result.json().then((resp) => {
                // console.warn('result', resp);

                const data = resp.flatMap(entry => entry.movies.map(movie => ({
                    "day": new Date(entry.date).getUTCDate(),
                    "month": getMonth(entry.date),
                    "year": new Date(entry.date).getUTCFullYear(),
                    "poster": movie.poster,
                    "title": movie.title,
                    "released": new Date(movie.released).getUTCFullYear(),
                    "rating": movie.imdb_rating
                })));

                setMoviesData(data);
            })
        })
    }, []);

    return (
        <>
            <table className="table-dark">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Day</th>
                        <th colSpan={2}>Film</th>
                        <th>Released</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        moviesData.map((movie, index) => (
                            <tr key={index}>
                                <td>
                                    <div className='calender' style={
                                        {
                                            position: 'relative'
                                        }
                                    }>
                                        <FontAwesomeIcon icon={faCalendar}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                opacity: 0.5,  // Adjust opacity if needed
                                            }} />
                                        <div style={{
                                            position: 'relative',
                                            zIndex: 1,
                                            padding: '5px'
                                        }}>
                                            <div className='row justify-content-center'>
                                                {index > 0
                                                    && moviesData[index - 1].month === movie.month
                                                    ? '' : movie.month}
                                            </div>
                                            <div className='row justify-content-center'>
                                                {
                                                    index > 0
                                                        && moviesData[index - 1].month === movie.month
                                                        && moviesData[index - 1].year === movie.year
                                                        ? '' : movie.year
                                                }
                                            </div>
                                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <div className='day'>
                                        {index > 0
                                            && moviesData[index - 1].month === movie.day
                                            ? '' : movie.day}
                                    </div>
                                </td>
                                <td>
                                    <img src={movie.poster === 'N/A'
                                        ? 'https://www.reelviews.net/resources/img/default_poster.jpg'
                                        : movie.poster} alt={movie.title} />
                                </td>
                                <td>
                                    <div className='movie-title'>
                                        {movie.title}
                                    </div>
                                </td>
                                <td>
                                    {movie.released}
                                </td>
                                <td>
                                    <Star stars={movie.rating} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
