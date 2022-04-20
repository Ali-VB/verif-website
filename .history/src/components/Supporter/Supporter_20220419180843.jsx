import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';


const Supporter = () => {
  return (
    <div>
        <Carousel show={3.5} slide={2} transition={0.5}>
    <Highlight color="#f27a1a">We love Trendyol orange</Highlight>
    <Highlight color="#d53f8c">This is our github</Highlight>
    <Highlight color="#16be48">We love Trendyol green</Highlight>
    <Highlight color="#3f51b5">This is our website</Highlight>
</Carousel>
    </div>
  )
}

export default Supporter