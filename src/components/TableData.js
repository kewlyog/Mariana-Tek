import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import './TableData.css';
import { Star } from './Star';

export default function TableData({ moviesData }) {
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
                        <th>Runtime</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        moviesData.map((movie, index) => (
                            <tr key={index} id="movie-row">
                                <td>
                                    <div id='calender'>
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
                                                    }
                                            } />
                                        <div id="calender-text">
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
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <div>
                                        {movie.day}
                                    </div>
                                </td>
                                <td>
                                    <img src={
                                        movie.poster === 'N/A'
                                            ? 'https://www.reelviews.net/resources/img/default_poster.jpg'
                                            : movie.poster
                                    } alt={movie.title} />
                                </td>
                                <td>
                                    <div id='movie-title'>
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
                                <td>
                                    {movie.genre.join(', ')}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
