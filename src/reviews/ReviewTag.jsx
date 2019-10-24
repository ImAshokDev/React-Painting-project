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
        icon1={<i className="fa fa-star" />}
        icon2={<i className="fa fa-star" />}
        icon3={<i className="fa fa-star" />}
        icon4={<i className="fa fa-star" />}
        icon5={<i className="fas fa-star-half" />}
      />
      <Cards
        name="ashok"
        rate="5"
        image={img2}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        like="43"
        icon1={<i className="fa fa-star" />}
        icon2={<i className="fa fa-star" />}
        icon3={<i className="fa fa-star" />}
        icon4={<i className="fa fa-star" />}
        icon5={<i className="fa fa-star" />}
      />
      <Cards
        name="ashok"
        rate="4.7"
        image={img3}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        like="43"
        icon1={<i className="fa fa-star" />}
        icon2={<i className="fa fa-star" />}
        icon3={<i className="fa fa-star" />}
        icon4={<i className="fa fa-star" />}
        icon5={<i className="fas fa-star-half" />}
      />
      <Cards
        name="ashok"
        rate="5"
        image={img4}
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        like="43"
        icon1={<i className="fa fa-star" />}
        icon2={<i className="fa fa-star" />}
        icon3={<i className="fa fa-star" />}
        icon4={<i className="fa fa-star" />}
        icon5={<i className="fa fa-star" />}
      />
    </div>
  </div>
);

const Cards = ({
  name,
  rate,
  image,
  text,
  like,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) => (
  <div className="cards">
    <p>
      <span className="left">
        <i className="fa fa-check" />
        {name}
      </span>
    </p>
    <div className="profile">
      <img src={image} alt="" />
    </div>
    <h4>{text}</h4>
    <span className="right">
      {icon1}
      {icon2}
      {icon3}
      {icon4}
      {icon5}
      {rate}
    </span>

    {/* <span className="left">
      <i className="fa fa-heart" />
      {like}
    </span> */}
  </div>
);

export default ReviewTag;
