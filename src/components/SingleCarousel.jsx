import React, { Component } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import movie from "../media/media0.jpg";
export default class SingleCarousel extends Component {
  render() {
    return (
      <div>
        <Container fluid className="my-4">
          <h6 className="my-3">Horror</h6>
          <Carousel>
            <Carousel.Item indicators={false}>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container fluid className="my-4">
          <h6 className="my-3">Action</h6>
          <Carousel indicators={false}>
            <Carousel.Item>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container fluid className="my-4">
          <h6 className="my-3">Anime</h6>
          <Carousel indicators={false}>
            <Carousel.Item>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src={movie}
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}
