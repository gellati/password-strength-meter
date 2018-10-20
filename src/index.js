
import React from 'react'
import ReactDOM from 'react-dom'

import { render } from 'react-dom'

import Button from './components/Button'
import RadioButton from './components/RadioButton'
import Checkbox from './components/Checkbox'

import 'bootstrap/dist/css/bootstrap.css';

import PrinciplesProgress from './components/PrinciplesProgress'
import PrinciplesList from './components/PrinciplesList'
import PasswordField from './components/PasswordField'
import StrengthMeter from './components/StrengthMeter'
import PasswordInput from './components/PasswordInput'

ReactDOM.render(
  <PasswordInput />,
  document.getElementById('app')
);












// hot relaoding, section 3 not done yet
//https://gaearon.github.io/react-hot-loader/getstarted/

// untested
/*
// not sure if this works
render(
  if (module.hot) {
    module.hot.accept('./components/Button.js', () => {
      const NextRootContainer = require('./components/Button.js').default;
       render(<NextRootContainer />, document.getElementById('app'));
     }
*/
/*
     module.hot.accept('./components/PasswordInput.js', () => {
       const NextRootContainer = require('./components/PasswordInput.js').default;
        render(<NextRootContainer />, document.getElementById('app'));
      }
*/

/*
    }
);
*/
