import React from "react";
import ReactDOM from 'react-dom';
import { Carousel, Highlight } from "@trendyol-js/react-carousel";
import "./Supporter.css";
 import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import { Item } from "./instant-Delivery.png";
const Supporter = () => {
    const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '2px', color: '#fff', padding: '90px 0', display: 'block', height: '200px', margin: '16px 16px 16px 0', }}> {children} );
  return (
    <div className="supporter-section">
   <Carousel show={3.5} slide={2} transition={0.5}>
    <Highlight color="#f27a1a">We love Trendyol orange</Highlight>
    <Highlight color="#d53f8c">This is our github</Highlight>
    <Highlight color="#16be48">We love Trendyol green</Highlight>
    <Highlight color="#3f51b5">This is our website</Highlight>
</Carousel>
    </div>
  );
};

export default Supporter;
