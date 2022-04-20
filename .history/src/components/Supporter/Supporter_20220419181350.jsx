import React from "react";
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from './yourItem';
import './Supporter.css';

const Supporter = () => {
  return (
    <div className="supporter-section">
      <Carousel>
       <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </div>
  );
};

export default Supporter;
