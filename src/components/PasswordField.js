import React from 'react'

// destructure import: https://stackoverflow.com/questions/32329358/react-bootstrap-uncaught-typeerror-cannot-read-property-touppercase-of-unde

import { Input } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'

import { Button } from 'react-bootstrap'

import classNames from 'classnames' //'react-classnames'


class PasswordField extends React.Component{
  constructor(props){
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(ev){
    let { onPasswordChange } = this.props;
    onPasswordChange(ev.target.value);
  }

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
      warning: (percentage >= 33.4 && percentage <= 66.7)
    });
  }

  render(){
    let {password} = this.props;
/*
    return(
      <input type="text" label='Password' value={password} onChange={this.handlePasswordChange}>// bsStyle={this.inputColor()}>
      </input>
    );
    */
        return(
          <Input
            type='password'
            label='Password'
            value={password}
            bsStyle={this.inputColor()}
            onChange={this.handlePasswordChange}
            hasFeedback>
          </Input>
        );
        /*
    */
    /*
    return(
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon></InputGroup.Addon>
        <FormControl type="text"></FormControl>
      </InputGroup>
    </FormGroup>
  );

  */

/*
    return(
      <form>
    <FormGroup>
      <InputGroup>
      <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </FormGroup>
    </form>
    );
*/
  }
}

PasswordField.propTypes = {
  password: React.PropTypes.string
}

export default PasswordField;

/*
const PasswordField = ({password}) => (
  <Input
    type='password'
    label='Password'
    value={password}
    bsStyle={inputColor()}
    onChange={handlePasswordChange}
    hasFeedback>
  </Input>
);

handlePasswordChange(ev){
  let { onPasswordChange } = props;
  onPasswordChange(ev.target.value);
}
satisfiedPercent(){
  let { principles, password } = props;
  let satisfiedCount = principles.map(p => p.predicate(password))
                                 .reduce((count, satisfied) =>
                                    count + (satisfied ? 1 : 0 )
                                  , 0);
  let principlesCount = principles.length;
  return (satisfiedCount / principlesCount) * 100.0;

}

inputColor(){
  percentage = satisfiedPercent();
  return classNames({
    error: (percentage < 33.4),
    success: (percentage >= 66.7),
    warning: (percentage >= 33.4 && percentage <= 66.7)
  });
}

export default PasswordField;
*/
