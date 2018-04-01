import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-bootstrap'

import PasswordField from './PasswordField'
import StrengthMeter from './StrengthMeter'

const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
const DIGIT_REGEX = /[0-9]/;

class PasswordInput extends React.Component{
  constructor(props){
    super(props);
    this.state = { password: '' };
    this.changePassword = this.changePassword.bind(this);
  }
  changePassword(password){
    this.setState({password})
  }
  render(){
    let {goodPasswordPrinciples} = this.props;
    let {password} = this.state;

    return(
      <Grid>
        <Row>
          <Col md={8}>
            <PasswordField password={password}
                           onPasswordChange={this.changePassword}
                           principles={goodPasswordPrinciples}/>
          </Col>
          <Col md={4}>
            <StrengthMeter principles={goodPasswordPrinciples}
                           password={password} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

PasswordInput.defaultProps = {
  goodPasswordPrinciples: [
    {
      label: "6+ characters",
      predicate: password => password.length >= 6
    },
    {
      label: "with at least one digit",
      predicate: password => password.match(DIGIT_REGEX) !== null
    },
    {
      label: "with at least one special character",
      predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null
    }
  ]
}

PasswordInput.proptypes = {
  goodPasswordPrinciples: PropTypes.string,
  principles: PropTypes.string
};

export default PasswordInput;

/*
const PasswordInput = ({goodPasswordPrinciples, password}) => (
  <Grid>
    <Row>
      <Col md={8}>
        <PasswordField password={password}
                       onPasswordChange={changePassword}
                       principles={goodPasswordPrinciples}/>
      </Col>
      <Col md={4}>
        <StrengthMeter principles={goodPasswordPrinciples}
                       password={password} />
      </Col>
    </Row>
  </Grid>
);

changePassword(password){
  setState({password})
}

PasswordInput.defaultProps = {
  goodPasswordPrinciples: [
    {
      label: "6+ characters",
      predicate: password => password.length >= 6
    },
    {
      label: "with at least one digit",
      predicate: password => password.match(DIGIT_REGEX) !== null
    },
    {
      label: "with at least one special character",
      predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null
    }
  ]
}

export default PasswordInput;
*/
