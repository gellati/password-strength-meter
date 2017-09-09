import React from 'react'

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
  checkd: React.PropTypes.bool,
  defaultChecked: React.PropTypes.bool,
  handleChangeCheckbox: React.PropTypes.func
};

export default Checkbox;
