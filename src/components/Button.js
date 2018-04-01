import React from 'react'
import PropTypes from 'prop-types'

const buttonStyles = {
  border: '1px solid black',
  borderRadius: 3,
  backgroundColor: '#FFF',
  cursor: 'pointer',
  fontSize: 15,
  margin: 10
};

const Button = ({children, onClick}) => (
  <button
    style={buttonStyles}
    onClick={onClick}
    >
    {children}
    </button>
);

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
