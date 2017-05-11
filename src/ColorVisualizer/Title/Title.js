import React from "react";
import PropTypes from 'prop-types';

import styles from "./Title.css";

const Title = ({children}) => (
  <h1 className={styles.main}>{children}</h1>
);
Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
