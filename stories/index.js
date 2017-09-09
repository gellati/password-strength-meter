import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../src/components/Button'
import RadioButton from '../src/components/RadioButton'
import Checkbox from '../src/components/Checkbox'

import PrinciplesProgress from '../src/components/PrinciplesProgress'
import PrinciplesList from '../src/components/PrinciplesList'
import PasswordField from '../src/components/PasswordField'
import StrengthMeter from '../src/components/StrengthMeter'
import PasswordInput from '../src/components/PasswordInput'

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
	    <Button onClick={action('clicked')}> :-- </Button>
    ));

    storiesOf('Checkbox', module)
      .add('Checkbox', () => (
        <Checkbox></Checkbox>
      ))
      .add('Checked', () => (
        <Checkbox checked={true}></Checkbox>
      ));


/*    storiesOf('PasswordInput', module)  // object
      .add('PasswordInput', () => (
        <PasswordInput password='hello'></PasswordInput>
    ));
*/

// gives error message:
// Super expression must either be null or a function, not object

    storiesOf('PrinciplesList', module)   // object
//      .add('PrinciplesList', () => (
  //      <PrinciplesList password='helloo'></PrinciplesList>
    //))
    .add('Good password principles', function (){
      const password = "helloooo";
      return <PrinciplesList password={password} principles={principles}></PrinciplesList>
    });

    storiesOf('PasswordField', module)   // object
        .add('field', function (){
          const password = "helllllo";
          return <PasswordField password={password} principles={principles}></PasswordField>
        });


/*
    storiesOf('PrinciplesProgress', module)   // object
//      .add('PrinciplesProgress', () => (
//        <PrinciplesProgress></PrinciplesProgress>
//    ));
   .add('test', function(){
     const password = "hellooo";
     const principles = [{label: "hello", predicate: password => password.length >= 6 }];
     return <PrinciplesProgress password={password} principles={principles}></PrinciplesProgress>

   });
*/


    /*
    storiesOf('StrengthMeter', module)  // object
      .add('StrengthMeter', () => (
        <StrengthMeter></StrengthMeter>
    ));

*/



/*
storiesOf('RadioButton', module)
  .add('gneder', () => (

  ));
*/
storiesOf('Form', module)
  .add('Form', () => (
    <form>
    </form>
  ));

storiesOf('RadioButton', module)
  .add('RadioButton', () => (
    <RadioButton></RadioButton>
  ));



/*
  .add('unclicked', () => (
      <input type="radio" value="1" name="question"/> Male

  ))
*/
