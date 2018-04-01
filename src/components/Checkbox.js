import React from 'react'
import PropTypes from 'prop-types'

const checkboxStyles = {
  border: '1px solid black'
}

const Checkbox = ({checkd, defaultChecked, handleChangeCheckbox}) => (
  <input
    type="checkbox"
    checked={checkd}
    defaultChecked={defaultChecked}
    onChange={handleChangeCheckbox}
    >
    </input>
);

Checkbox.propTypes = {
  checkd: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  handleChangeCheckbox: PropTypes.func
};

export default Checkbox;
