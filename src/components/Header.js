import React from 'react'

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{ marginTop: 30, marginBottom: 30 }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">
                        <img src="https://assets.website-files.com/5f0f926abfd3d00f75b4f693/63eb944301d927361d3ea2b3_mariana-tek-logo.png"
                            alt="Mariana Tek" width="300" className="d-inline-block align-text-top"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Activity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Films</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Diary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Watchlist</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
