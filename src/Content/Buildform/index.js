import React,{ Component } from 'react';
import './style.scss';
import Textfield from './Formelements/Textfield';
import Buttonfield from './Formelements/Buttonfield';

class BuildForm extends Component {
  render() {
    const { form_title, input_items:form_input , button_items:form_button } = this.props;
    const input_items = form_input.map((item, index)=><Textfield key={index} form_item={item}/>);
    const button_items = form_button.map((item, index)=><Buttonfield key={index} form_item={item}/>)
    return (<form>
              <h3>{form_title}</h3>
              {input_items}
              {button_items}
            </form>
            );
  }
}

export default BuildForm


