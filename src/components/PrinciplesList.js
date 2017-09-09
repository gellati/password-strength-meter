import React from 'react'
import classNames from 'classnames' //'react-classnames'

class PrinciplesList extends React.Component{
  static propTypes = {
    password: React.PropTypes.string
  }

  principleSatisfied(principle){
    let { password } = this.props;
    return principle.predicate(password);
  }
  principleClass(principle){
    let satisfied = this.principleSatisfied(principle);
    return classNames({
      ["text-success"] : satisfied,
      ["text-danger"] : !satisfied
    });
  }
  render(){
    let { principles } = this.props;

    return(
      <ul>
        {principles.map(principle =>
           <li className={this.principleClass(principle)}>
             <small>
               {principle.label}
             </small>
           </li>
        )}
      </ul>
    );
  }
}

export default PrinciplesList;


/*
const PrinciplesList = ({principles}) => (
  <ul>
    {principles.map(principle =>
       <li className={principleClass(principle)}>
         <small>
           {principle.label}
         </small>
       </li>
    )}
  <ul>
);

principleClass(principle){
  let satisfied = principleSatisfied(principle);
  return classNames({
    ["text-success"] : satisfied,
    ["text-danger"] : !satisfied
  })
};
*/
