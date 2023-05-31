import Carousel from './Carousel.js'
import {useState} from 'react'
import bg1 from "./images/1.jpg"
import bg2 from "./images/2.jpg"
import bg3 from "./images/3.jpg"

// Принимаем данные из navbar->app->slide->carousel
const Slide = ({value}) => {

  return (
    <>
      <Carousel value={value}>
        <div className="item item-1"><img src={bg1} alt="первая" /></div>
        <div className="item item-2"><img src={bg2} alt="вторая" /></div>
        <div className="item item-4"><img src={bg3} alt="третья" /></div>
        <div className="item item-3">Item 3</div>
      </Carousel>
    </>
  );
}

export default Slide
