import React from 'react';
import './ReviewTag.scss';
import img1 from 'https://dl.dropboxusercontent.com/s/b5hu3jrzmrimkkl/1.jpg';

const ReviewTag = () => (
  <div className="reviewtag-section">
    <div className="title">
      <h1>What people are saying about us</h1>
    </div>
    <div className="review-block">
      <Cards name="ashok" rate="4.6" image={img1} />
    </div>
  </div>
);

const Cards = ({ name, rate, image }) => (
  <div className="cards">
    <p>
      <span className="left">
        <i className="fa fa-check" />
        {name}
      </span>
      <span className="right">
        <i className="fa fa-star" />
        {rate}
      </span>
    </p>
    <div className="profile">
      <img src={image} alt="" />
    </div>
  </div>
);

export default ReviewTag;
