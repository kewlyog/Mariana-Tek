import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Header from './components/Header';
import JsonData from './components/JsonData';
const API = 'http://localhost:3002/movies/';

function getMonth(isoDate) {
  const dateObj = new Date(isoDate);
  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  return monthNames[dateObj.getUTCMonth()];
}

function App() {
  const [query, setQuery] = useState("");

  const [moviesData, setMoviesData] = useState([]);

  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    fetch(API).then((result) => {
      result.json().then((resp) => {

        const data = resp.flatMap(entry => entry.movies.map(movie => ({
          "day": new Date(entry.date).getUTCDate(),
          "month": getMonth(entry.date),
          "year": new Date(entry.date).getUTCFullYear(),
          "poster": movie.poster,
          "title": movie.title,
          "released": new Date(movie.released).getUTCFullYear(),
          "rating": movie.imdb_rating,
          "runtime": movie.runtime,
          "genre": movie.genre
        })));

        setMoviesData(data);
      })
    })
  }, []);

  const filteredMovies = moviesData.filter(movie =>
    selectedGenres.every(genre => movie.genre.includes(genre.value))
  );

  const genreOptions = [...new Set(moviesData.flatMap(movie => movie.genre))].map(genre => ({ value: genre, label: genre }));

  const search = (data) => {
    return data.filter(
      (item) => item.title.toLowerCase().includes(query)
    );
  };

  return (
    <div className="container-md">

      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Select styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: '#212529',
              borderColor: '#3b3f45'
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: '#212529',
              color: '#778088'
            }),
            multiValue: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: '#9ba2a9',
            })
          }}
            isMulti className='dark' placeholder='Select Genre'
            options={genreOptions} value={selectedGenres}
            onChange={selectedOptions => setSelectedGenres(selectedOptions)}
          />
          <br />
        </div>
        <div className="col">
          <input type="text" className="form-control bg-dark text-light"
            placeholder='Search Movie' id="searchText" style={{ borderColor: '#3b3f45' }}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <JsonData moviesData={search(filteredMovies)} />
        </div>
      </div>

    </div>
  );
}

export default App;
