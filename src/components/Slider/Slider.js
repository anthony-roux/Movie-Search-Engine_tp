import React, {useState} from 'react';
import styled from 'styled-components';

import './Slider.css';

const NumberStyle = styled.span`
  color: yellowgreen;
  border : 1px solid red;
  font-size: 12px
`;
const DivStyle = styled.div`
  background-color: yellow;
`;

const Slider = ({ number }) => <DivStyle className="slide">
  <NumberStyle>[number]</NumberStyle>
</DivStyle>
export default Slider;

