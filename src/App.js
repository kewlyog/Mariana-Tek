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

  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const search = (data) => {
    return data.filter(
      (item) => item.title.toLowerCase().includes(query)
        || item.genre.toLowerCase().includes(selectedGenres)
    );
  };

  const options = uniqueGenres.map(genre => ({
    value: genre,
    label: genre,
  }));

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

        const genresSet = new Set();

        data.forEach(item => {
          item.genre.forEach(genre => {
            genresSet.add(genre);
          });
        });

        // console.log(genresSet);

        setUniqueGenres(Array.from(genresSet));

        setMoviesData(data);
      })
    })
  }, []);

  const handleGenreChange = selectedOptions => {
    console.log('selectedOptions', selectedOptions);
    setSelectedGenres(selectedOptions);
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
          {/* <select className="form-select list-group-item-dark"
            multiple aria-label="multiple select example">
            <option defaultValue={0}>Select Genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}
          <Select styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: '#212529',
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
            options={options} value={selectedGenres} onChange={handleGenreChange}
          />
          <br />
          {/* <p>Selected Genres: {selectedGenres.map(genre => genre.value).join(', ')}</p> */}
        </div>
        <div className="col">
          {/* <label className="form-label text-light">Search Movie</label> */}
          <input type="text" className="form-control bg-dark text-light" placeholder='Search Movie'
            id="searchText" onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <JsonData moviesData={search(moviesData)} />
        </div>
      </div>

    </div>
  );
}

export default App;
