import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CarouselComponent() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{
                                    borderRadius: "25px",
                                    padding: "10px 20px",
                                    border: "2px solid var(--secondary-color)",
                                    boxShadow: "0 4px 8px var(--shadow-color)",
                                    fontSize: "16px",
                                    transition: "all 0.3s ease-in-out"
                                }}
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                style={{
                                    borderRadius: "25px",
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    border: "2px solid var(--primary-color)",
                                    color: "var(--primary-color)",
                                    backgroundColor: "transparent",
                                    transition: "all 0.3s ease-in-out"
                                }}
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img
                            src="https://img.freepik.com/premium-photo/choclate-cake-4k-image_758367-103.jpg"
                            className="d-block"
                            alt="cake"
                            style={{
                                filter: 'brightness(30%)',
                                width: '100%',
                                margin: 'auto',
                                maxHeight: '90vh',
                                objectFit: 'fit',
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg"
                            className="d-block"
                            alt="Burger"
                            style={{
                                filter: 'brightness(30%)',
                                width: '100%',
                                margin: 'auto',
                                maxHeight: '90vh',
                                objectFit: 'fit',
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.freepik.com/premium-photo/product-shots-juice-high-quality-4k-ultra-hd_670382-130133.jpg"
                            className="d-block"
                            alt="juice"
                            style={{
                                filter: 'brightness(30%)',
                                width: '100%',
                                margin: 'auto',
                                maxHeight: '90vh',
                                objectFit: 'fit',
                            }}
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default CarouselComponent;