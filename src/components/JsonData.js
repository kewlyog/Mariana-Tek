import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// import { FaStar } from 'react-icons/fa';
import './JsonDataStyle.css';
// import { StarRatings } from './StarRatings';
import { Star } from './Star';
const API = 'http://localhost:3002/movies/';

// function getMonth(isoDate) {
//     const dateObj = new Date(isoDate);
//     const monthNames = [
//         "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
//         "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
//     ];

//     return monthNames[dateObj.getUTCMonth()];
// }

export default function JsonData({ moviesData }) {
    // const [moviesData, setMoviesData] = useState([]);

    // const filterMovies = (event) => {
    //     setMoviesData(
    //         moviesData.filter(movie => movie.title.toLowerCase().includes(event.target.value))
    //     );
    // }

    // useEffect(() => {
    //     fetch(API).then((result) => {
    //         result.json().then((resp) => {
    //             // console.warn('result', resp);

    //             const data = resp.flatMap(entry => entry.movies.map(movie => ({
    //                 "day": new Date(entry.date).getUTCDate(),
    //                 "month": getMonth(entry.date),
    //                 "year": new Date(entry.date).getUTCFullYear(),
    //                 "poster": movie.poster,
    //                 "title": movie.title,
    //                 "released": new Date(movie.released).getUTCFullYear(),
    //                 "rating": movie.imdb_rating
    //             })));

    //             setMoviesData(data);
    //         })
    //     })
    // }, []);

    return (
        <>
            {/* <div className="row">
                <div className="col">
                    <select className="form-select list-group-item-dark"
                        multiple aria-label="multiple select example">
                        <option defaultValue={0}>Select Genre</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col">
                    <label className="form-label text-light">Search Movie</label>
                    <input type="text" className="form-control bg-dark text-light"
                        id="searchText" onChange={setMoviesData}
                    />
                </div>
            </div> */}
            <table className="table-dark">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Day</th>
                        <th colSpan={2}>Film</th>
                        <th>Released</th>
                        <th>Rating</th>
                        <th>Runtime</th>
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
                                            style={
                                                index > 0
                                                    && moviesData[index - 1].month === movie.month
                                                    ?
                                                    {
                                                        display: 'none'
                                                    }
                                                    :
                                                    {
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '100%',
                                                        opacity: 0.1,
                                                        // top: 0,
                                                        // left: 0,
                                                    }
                                            } />
                                        <div style={{
                                            position: 'relative',
                                            padding: '5px',
                                            color: '#9773ab',
                                            // zIndex: 1,
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
                                <td>
                                    {movie.runtime}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
