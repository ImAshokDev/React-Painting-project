import React from 'react';
import './Review.scss';

const Review = () => (
  <div className="review-section">
    <div className="title">
      <div className="box">
        <h1>What people are saying about us</h1>
      </div>
    </div>
    <div className="row-around">
      {/* BLUE CARD  */}
      <div className="col-sm-3 col-xs-6">
        <div className="review">
          <div className="box-blue">
            <div className="card-wrapper">
              <div className="card-overlay1" />
              <div className="card-header">
                <span className="left">
                  <i className="fa fa-check" />
                  Editor Pick
                </span>
                <span className="right">
                  <i className="fa fa-star" />
                  4.5
                </span>
              </div>
              <div className="card-mid">
                <img
                  src="https://dl.dropboxusercontent.com/s/b5hu3jrzmrimkkl/1.jpg"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <h4>
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu.
                </h4>
                <ul>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* GREEN CARD */}
      <div className="col-sm-3 col-xs-6">
        <div className="review">
          <div className="box-green">
            <div className="card-wrapper">
              <div className="card-overlay2" />
              <div className="card-header">
                <span className="left">
                  <i className="fa fa-check" />
                  Editor Pick
                </span>
                <span className="right">
                  <i className="fa fa-star" />
                  4.1
                </span>
              </div>
              <div className="card-mid">
                <img
                  src="https://dl.dropboxusercontent.com/s/54o5c6aquk0ranx/2.jpg"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <h4>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </h4>
                <ul>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* YELLOW CARD  */}
      <div className="col-sm-3 col-xs-6">
        <div className="review">
          <div className="box-yellow">
            <div className="card-wrapper">
              <div className="card-overlay3" />
              <div className="card-header">
                <span className="left">
                  <i className="fa fa-check" />
                  Editor Pick
                </span>
                <span className="right">
                  <i className="fa fa-star" />
                  4.9
                </span>
              </div>
              <div className="card-mid">
                <img
                  src="https://dl.dropboxusercontent.com/s/zlqnaoy2a7pg5d1/3.jpg"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <h4>Aenean commodo ligula eget dolor. Aenean massa.</h4>

                <ul>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RED CARD */}
      <div className="col-sm-3 col-xs-6">
        <div className="review">
          <div className="box-red">
            <div className="card-wrapper">
              <div className="card-overlay4" />
              <div className="card-header">
                <span className="left">
                  <i className="fa fa-check" />
                  Editor Pick
                </span>
                <span className="right">
                  <i className="fa fa-star" />
                  4.9
                </span>
              </div>
              <div className="card-mid">
                <img
                  src="https://dl.dropboxusercontent.com/s/s8p75gfdszra787/4.jpg"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <h4>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </h4>

                <ul>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Review;
