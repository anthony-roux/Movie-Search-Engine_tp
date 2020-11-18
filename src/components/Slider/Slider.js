import React, {useState} from 'react';
import './Slider.scss';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

// const MyCarousel = () => (
//   <Carousel plugins={['arrows']}>
//     <img src={'exemple/imageOne'} alt="exemple" />
//     <img src={'exemple/imageTwo.jpg'} alt="exemple" />
//     <img src={'exemple/imageThree.jpg'} alt="exemple" />
//   </Carousel>
// );

// export default MyCarousel;

function Slider(){
  let sliderArr =[1,2,3,4,5];
  const [x, setX] = useState(0)
  const goLeft= () =>{
    setX(x + 100);
  };
  const goRight= () =>{
    console.log(x);
    (x=== -100*(sliderArr.length-1)) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {
        sliderArr.map ((item, index)=> {
          return (
            <div key={index} className="slide" style={{transform:`translateX(${x})`}}>
              {item}
            </div>

          );
        })}
        <button id="goLeft" onClick={goLeft}>left</button>
        <button id="goRight" onClick={goRight}>Right</button>
      
    </div>
  );
}
export default Slider;