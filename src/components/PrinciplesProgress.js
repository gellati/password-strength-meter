import React from 'react'
import classNames from 'classnames'

import ProgressBar from 'react-bootstrap'

class PrinciplesProgress extends React.Component{

  static propTypes = {
    password: React.PropTypes.string
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
  progressColor(){
    let percentage = this.satisfiedPercent();
    return classNames({danger: true});
/*
    return classNames({
      danger: (percentage < 33.4),
      success: (percentage >= 66.7),
      warning: (percentage >= 33.4 && percentage <= 66.7)
    });
*/
  }
  render(){
    return(
      <ProgressBar now={this.satisfiedPercent()}
                   bsStyle={this.progressColor()}/>
    )
  }

}





/*
const PrinciplesProgress = () => (
  <ProgressBar now={satisfiedPercent()}
               bsStyle={progressColor()}/>

)

progressColor(){
  let percentage = satisfiedPercent();
  return classNames({
    danger: (percentage < 33.4),
    success: (percentage >= 66.7),
    warning: (percentage >= 33.4 && percentage <= 66.7)
  });
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

export default PrinciplesProgress;
*/

export default PrinciplesProgress;
