import React, { Component } from "react";
import { Carousel, Spinner, Row, Col } from "react-bootstrap";
import Error from "./Error";
export default class SingleCarousel extends Component {
  state = {
    isLoading: true,
    isError: false,
    movies: [],
  };
  fetchMovies = async () => {
    try {
      let movieList = `http://www.omdbapi.com/?apikey=9f9fcef2&s=${encodeURIComponent(
        this.props.search.toLowerCase()
      )}`;
      let response = await fetch(movieList);

      if (response.ok) {
        let data = await response.json();

        let numOfMovies = 6;

        const movieData = data.Search.reduce((resultArray, item, index) => {
          const movieIndex = Math.floor(index / numOfMovies);

          if (!resultArray[movieIndex]) {
            resultArray[movieIndex] = [];
          }

          resultArray[movieIndex].push(item);

          return resultArray;
        }, []);

        console.log(movieData);

        this.setState({
          ...this.state,
          isLoading: false,
          movies: movieData,
        });
      } else {
        this.setState({
          ...this.state,
          isError: true,
          isLoading: false,
        });
      }
    } catch (e) {
      this.setState({
        ...this.state,
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="movie-gallery m-2">
        <h3 className="text-light mt-2 mb-2">{this.props.search}</h3>

        {this.state.isLoading && <Spinner></Spinner>}

        {this.state.isError && <Error></Error>}

        {!this.state.isLoading && !this.state.isError && (
          <Carousel>
            {this.state.movies.map((movies) => (
              <Carousel.Item>
                <div className="movie-row">
                  <Row>
                    {movies.map((movie) => (
                      <Col md={2}>
                        <a href="#">
                          <img src={movie.Poster} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    );
  }
}
