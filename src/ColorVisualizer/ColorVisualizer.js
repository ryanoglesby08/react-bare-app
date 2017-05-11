import React from "react";
import PropTypes from 'prop-types';

import Background from "./Background/Background";
import Title from "./Title/Title";

const ColorVisualizer = ({color}) => (
  <Background color={color}>
    <Title>{color}</Title>
  </Background>
);
ColorVisualizer.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorVisualizer;
