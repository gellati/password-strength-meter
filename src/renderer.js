
import React from 'react'
import ReactDOM from 'react-dom'

import { render } from 'react-dom'

import { PasswordInput } from './components/PasswordInput.js'

//var ReactDOM = require('react')
//var PasswordInput = require('./components/PasswordInput')

// hot relaoding, section 3 not done yet
//https://gaearon.github.io/react-hot-loader/getstarted/

// untested
render(
  if (module.hot) {
     module.hot.accept('./components/PasswordInput.js', () => {
       const NextRootContainer = require('./components/PasswordInput.js').default;
        render(<NextRootContainer />, document.getElementById('app'));
      }
    }
);

// untested
//render(
//  <PasswordInput/>,
//  document.getElementById('app')
//);



/*
// works
ReactDOM.render(
  <PasswordInput/>,
  document.getElementById('app')
);
*/
