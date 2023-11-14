import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
        style={{objectFit:"contain",important:"true"}} 
      >
        <div className="carousel-inner" id="carousel" >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-white bg-success " type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="/eiliv-aceron-uBigm8w_MpA-unsplash (2).jpg"
              style={{ filter: "brightness(30%)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/fatima-akram-uU0Anw-8Vsg-unsplash (2).jpg"
              style={{ filter: "brightness(30%)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/leohoho-abiaOxHdVjM-unsplash (1).jpg"
              style={{ filter: "brightness(30%)" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
