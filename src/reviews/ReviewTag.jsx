import React from 'react';
import './ReviewTag.scss';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

const ReviewTag = () => (
  <div className="reviewtag-section">
    <div className="title">
      <h1>What people are saying about us</h1>
    </div>
    <div className="review-block">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  </div>
);

const Card1 = () => (
  <div className="cards">
    <div className="card-wrapper1">
      <div className="card1">
        <div className="profile">
          <img src={img1} alt="" />
        </div>
        <div className="name">
          <span>
            <i className="fa fa-check" />
            ashok
          </span>
        </div>

        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4>

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

        <h5>5</h5>
      </div>
    </div>
  </div>
);
const Card2 = () => (
  <div className="cards">
    <div className="card-wrapper2">
      <div className="card2">
        <div className="profile">
          <img src={img2} alt="" />
        </div>
        <div className="name">
          <span>
            <i className="fa fa-check" />
            ashok
          </span>
        </div>

        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4>

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

        <h5>4.2</h5>
      </div>
    </div>
  </div>
);
const Card3 = () => (
  <div className="cards">
    <div className="card-wrapper3">
      <div className="card3">
        <div className="profile">
          <img src={img3} alt="" />
        </div>
        <div className="name">
          <span>
            <i className="fa fa-check" />
            ashok
          </span>
        </div>

        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4>

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

        <h5>4.2</h5>
      </div>
    </div>
  </div>
);
const Card4 = () => (
  <div className="cards">
    <div className="card-wrapper4">
      <div className="card4">
        <div className="profile">
          <img src={img4} alt="" />
        </div>
        <div className="name">
          <span>
            <i className="fa fa-check" />
            ashok
          </span>
        </div>

        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4>

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

        <h5>5</h5>
      </div>
    </div>
  </div>
);

export default ReviewTag;
