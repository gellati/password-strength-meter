import React from 'react'
import { storiesOf   } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../src/components/Button'
import RadioButton from '../src/components/RadioButton'
import Checkbox from '../src/components/Checkbox'

import PrinciplesProgress from '../src/components/PrinciplesProgress'
import PrinciplesList from '../src/components/PrinciplesList'
import PasswordField from '../src/components/PasswordField'
import StrengthMeter from '../src/components/StrengthMeter'
import PasswordInput from '../src/components/PasswordInput'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
const DIGIT_REGEX = /[0-9]/;
const principles = [{label: "6+ characters", predicate: password => password.length >= 6},
                    {label: "with at least one digit", predicate: password => password.match(DIGIT_REGEX) !== null},
                    {label: "with at least one special character", predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null}
                  ];

storiesOf('Button', module)
    .add('with text', ( ) => (
	    <Button onClick={action('clicked')}>Hello button</Button>
    ))
    .add('with emo', () => (
	    <Button onClick={action('cliked')}> :-- </Button>
    ));

storiesOf('Checkbox', module)
    .add('Checkbox', () => (
      <Checkbox></Checkbox>
    ))
    .add('Checked', () => (
      <Checkbox checked={true} checked={action('chek')} onClick={action('chek')}></Checkbox>
    ));


// gives error message:
// Super expression must either be null or a function, not object

storiesOf('Form', module)
  .add('Form', () => (
    <form>
    </form>
  ));


//function(par1, par2){}
//(par1, par2)=> {}

//        .add('PrinciplesList', () => {}
//          .add('field', function (){}




storiesOf('PasswordField', module)   // object
  .add('PasswordField', () => {
      var password = "hello";
      return <PasswordField password={password} principles={principles}></PasswordField>
});

storiesOf('PasswordInput', module)  // object
  .add('passwordinput', function(){
    const password = "strength";
  return <PasswordInput goodPasswordPrinciples={principles} password={password}></PasswordInput>
});

/*    storiesOf('PasswordInput', module)  // object
      .add('PasswordInput', () => (
        <PasswordInput password='hello'></PasswordInput>
    ));
*/


storiesOf('PrinciplesList', module)   // object
  .add('PrinciplesList', () => (
    <PrinciplesList password='helloo'></PrinciplesList>
))

.add('Good password principles', function (){
  const password = "helloooo";
  return <PrinciplesList password={password}></PrinciplesList>
});


storiesOf('PrinciplesProgress', module)   // object
  .add('progress', function(){             // ?? not showing anything
   const password = "hellooo";
//     const principles = principles; //[{label: "hello", predicate: password => password.length >= 6 }];
   return <PrinciplesProgress principles={principles} password={password}></PrinciplesProgress>
});

storiesOf('RadioButton', module)
  .add('RadioButton', () => (
  <RadioButton></RadioButton>
));

storiesOf('StrengthMeter', module)  // object
  .add('StrengthMeter', function(){
    const password = "strength";
  return <StrengthMeter principles={principles} password={password}></StrengthMeter>
});
