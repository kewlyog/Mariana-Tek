import React, { useEffect, useState } from 'react';
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

  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(query));
  };

  const [moviesData, setMoviesData] = useState([]);

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
          // "genre": movie.genre
        })));

        setMoviesData(data);
      })
    })
  }, []);

  return (
    <div className="container-md">

      <Header />

      <div className="row">
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
            id="searchText" onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <JsonData moviesData={search(moviesData)} />
    </div>
  );
}

export default App;
