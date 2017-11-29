import React,{ Component } from 'react';
import './style.scss';
import Buildform from '../Buildform';

class Signup extends Component {

  render() {
    
    const BuildFormDetails = [{
        form_title: 'Sign Up', 
        inputitems:['First Name','Last Name','Email','Password'], 
        submit:'register'
      }]; 
    const BuildForm = BuildFormDetails.map((item, index)=> 
              <Buildform key={index} form_title={item.form_title} input={item.inputitems} submit={item.submit}/>
            );
    
    return (<div className="signup__container">
              {BuildForm}
              </div>
            );
  }
}

export default Signup