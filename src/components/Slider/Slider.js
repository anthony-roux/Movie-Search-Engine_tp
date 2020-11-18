import React from 'react';
import styled from 'styled-components';

import './Slider.css';

const NumberStyle = styled.span`
  color: white;
`;
const DivStyle = styled.div`
  background-color: #333;
`;


const Slider = ({ number }) => 
<DivStyle className="slide">
  <NumberStyle>{number}</NumberStyle>
</DivStyle>
export default Slider;

