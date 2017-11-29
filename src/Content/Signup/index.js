import React,{ Component } from 'react';
import './style.scss';
import Buildform from '../Buildform';

class Signup extends Component {

  render() {
    
    const BuildFormDetails = [{
        form_title: 'Sign Up', 
        input_items:['First Name','Last Name','Email','Password'], 
        button_items:['register'],
      }]; 
    const BuildForm = BuildFormDetails.map((item, index)=> 
              <Buildform key={index} form_title={item.form_title} input_items={item.input_items} button_items={item.button_items}/>
            );
    
    return (<div className="signup__container">
              {BuildForm}
              </div>
            );
  }
}

export default Signup