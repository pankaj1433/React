import React,{ Component } from 'react';
import './style.scss';
import Buildform from '../Buildform';

class Calculator extends Component {

  render() {
    
    const BuildFormDetails = {
        form_title: 'Calculator', 
        input_items:['Enter Value'], 
        button_items:[1,2,3,4,5,6,7,8,9,'-',0,'+','/','=','*','clear'],
      };
    return (<div className="calculator__container">
              <Buildform  
                form_title={BuildFormDetails.form_title} 
                input_items={BuildFormDetails.input_items} 
                button_items={BuildFormDetails.button_items}
              />
              </div>
            );
  }
}

export default Calculator