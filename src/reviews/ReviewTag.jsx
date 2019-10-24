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
      <Cards
        name="ashok"
        rate="4.6"
        image={img1}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        like="43"
      />
      <Cards
        name="ashok"
        rate="4.6"
        image={img2}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        like="43"
      />
      <Cards
        name="ashok"
        rate="4.6"
        image={img3}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        like="43"
      />
      <Cards
        name="ashok"
        rate="4.6"
        image={img4}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        like="43"
      />
    </div>
  </div>
);

const Cards = ({
 name, rate, image, text, like 
}) => (
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
    <h4>{text}</h4>

    <span className="left">
      <i className="fa fa-heart" />
      {like}
    </span>
  </div>
);

export default ReviewTag;
