import React from 'react'
import classNames from 'react-classnames'

import { Panel } from 'react-bootstrap'
import {PrinciplesProgress} from './PrinciplesProgress'
import {PrinciplesList} from './PrinciplesList'

class StrengthMeter extends React.Component{
  render(){
    return (
      <Panel>
        <PrinciplesProgress {...this.props} />
        <h5>A good password is:</h5>
        <PrinciplesList {...this.props} />
      </Panel>
    );
  }
}


export default StrengthMeter;


/*
const StrengthMeter = ({principles}) => (
  <Panel>
    <PrinciplesProgress {principles} />
    <h5>A good password is:</h5>
    <PrinciplesList {props} />
  </Panel>
);
*/

/*
  <ul>
    {principles.map(principle=>
      <li>
        <small>
          {principle.label}
        </small>
      </li>
    )}
  </ul>
*/

// empty element
//  <noscript /> // https://github.com/facebook/react/issues/5355


/*
StrengthMeter.propTypes = {
  password: '',
  principles:
}

principleSatisfied(principle){
  let { password } = props;
  return principle.predicate(password);
}

principleClass(principle){
  let satisfied = principleSatisfied(principle);
  return classNames({
    ["text-success"]: satisfied,
    ["text-danger"]: !satisfied
  });
}



export default StrengthMeter;
*/
