import React from "react";
import styled from "styled-components";

import "./Slider.scss";

const NumberStyle = styled.span`
  color: white;
`;
const DivStyle = styled.div`
  background-color: #333;
`;

const Slider = ({ cardMovie }) => (
  <DivStyle className="slide">
    <NumberStyle>{cardMovie}</NumberStyle>
  </DivStyle>
);

export default Slider;
