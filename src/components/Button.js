import React from 'react'

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
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

export default Button;
