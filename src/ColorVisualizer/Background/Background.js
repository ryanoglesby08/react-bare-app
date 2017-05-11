import React from "react";
import PropTypes from 'prop-types';

import styles from "./Background.css";

const Background = ({color, children}) => (
  <div className={styles.main} style={{backgroundColor: color}}>
    {children}
  </div>
);
Background.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Background;
