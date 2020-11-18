import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src={'exemple/imageOne'} alt="exemple" />
    <img src={'exemple/imageTwo.jpg'} alt="exemple" />
    <img src={'exemple/imageThree.jpg'} alt="exemple" />
  </Carousel>
);

export default MyCarousel;



// import Carousel, { Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css'; import { useState } from 'react';

// const sliderWithDots = () => {
//   const [value, setValue] = useState(0);

//   const onChange = value => {
//   setValue(value);
//   }
//   return (
//     <div>
//       <Carousel
//         value={value}
//         onChange={onChange}
//       >
//         <div>
//             <div className="slider">1</div>
//             <div className="slider">2</div>
//         </div>  

//       </Carousel>
//       <Dots
//         value={this.state.value}
//         onChange={this.onChange}
//         thumbnails={[
//           (<div key={1} className="slider" />),
         
//           (<div key={12} className="slider" />),
//         ]}
//       />
//     </div>
//   );
// };

// export default sliderWithDots;