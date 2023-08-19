import React from 'react'

export default function Filter({ handleValueFromChild }) {

    const filterMovies = (event) => {
        // setMoviesData();
        handleValueFromChild(event.target.value); // Calling the callback function
    }

    return (
        <div className="containe">
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
                {/* <div class="col"> </div> */}
                <div className="col">
                    <label className="form-label text-light">Search Movie</label>
                    <input type="text" className="form-control bg-dark text-light"
                        id="searchText" onChange={filterMovies}
                    />
                </div>
            </div>
        </div>
    )
}
