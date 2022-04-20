import React from "react";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import './Supporter.css';
// import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import { Item } from './instant-Delivery.png';
const Supporter = () => {
  return (
    <div className="supporter-section">
      <ScrollingCarousel>
       <Item />
       
      
      </ScrollingCarousel>
    </div>
  );
};

export default Supporter;
