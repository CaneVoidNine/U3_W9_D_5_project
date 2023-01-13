import React, { Component } from "react";
import { Carousel, Spinner, Row, Col } from "react-bootstrap";
import Error from "./Error";
import { useEffect, useState } from "react";
const SingleCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([]);

  const movieSearch = async () => {
    try {
      const response1 = await fetch(
        "https://bework-production.up.railway.app/netflix"
      );
      if (response1.ok) {
        const unboxedResponse1 = await response1.json();
        setMovies(unboxedResponse1);
      } else {
        console.log("Error! Danger! Run!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    movieSearch();
    console.log(movies);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center"></div>
      <h3 className="m-3">Popular on Netflix:</h3>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {movies.map((movie) => (
          <a className="m-2" href="#">
            <img style={{ width: "30rem" }} src={movie.poster} alt="" />
          </a>
        ))}
      </Row>
    </>
  );
};

export default SingleCarousel;
