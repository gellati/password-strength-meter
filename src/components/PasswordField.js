import React from 'react'
import PropTypes from 'prop-types'
// destructure import: https://stackoverflow.com/questions/32329358/react-bootstrap-uncaught-typeerror-cannot-read-property-touppercase-of-unde

import { Input } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import { Button } from 'react-bootstrap'

import classNames from 'classnames' //'react-classnames'


class PasswordField extends React.Component{
  constructor(props){
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handlePasswordChange(ev){
//    this.password = ev.target.value;
    let { onPasswordChange } = this.props;
    onPasswordChange(ev.target.value);
    this.setState({ password: ev.target.value });
  }
/* // no work, use above method
  handleChange(e) {
     this.setState({ password: e.target.value });
   }
*/
  satisfiedPercent(){
    let { principles, password } = this.props;
    let satisfiedCount = principles.map(p => p.predicate(password))
                                   .reduce((count, satisfied) =>
                                      count + (satisfied ? 1 : 0 )
                                    , 0);
    let principlesCount = principles.length;
    return (satisfiedCount / principlesCount) * 100.0;
  }
  inputColor(){
    let percentage = this.satisfiedPercent();
    return classNames({
      error: (percentage < 33.4),
      success: (percentage >= 66.7),
      warning: (percentage >= 33.4 && percentage < 66.7)
    });
  }
  // need this method ?
  getValidationState() {
      const length = this.satisfiedPercent();
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
    }

  render(){
    let {password} = this.props;
        return(
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()} // need this?
              >
              <FormControl
              type="text"
                 value={password}
                 placeholder="Enter password"
                 onChange={this.handlePasswordChange}
                 bsClass={this.inputColor()}
               />
               <FormControl.Feedback />
            </FormGroup>
          </form>
        );
  }
}

PasswordField.propTypes = {
  password: PropTypes.string
}

export default PasswordField;
