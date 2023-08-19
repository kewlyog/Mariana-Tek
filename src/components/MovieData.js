const MovieData = ({ movies }) => {
    return (
        <>
            {
                movies.map((movie) => {
                    const { title, released, year, imdb_rating } = movie;

                    return (
                        <tr>
                            <td> {title} </td>
                            <td> {released} </td>
                            <td> {year} </td>
                            <td> {imdb_rating} </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default MovieData;
