import React,{ Component } from 'react';
import './style.scss';
import Textfield from './Formelements/Textfield';
import Buttonfield from './Formelements/Buttonfield';

class BuildForm extends Component {
  render() {
    const { form_title, input:form_input , submit:form_submit } = this.props;
    const input_items = form_input.map((item, index)=><Textfield form_item={item}/>)
    return (<form>
              <h3>{form_title}</h3>
              {input_items}
              <Buttonfield submit_value={ form_submit } />
            </form>
            );
  }
}

export default BuildForm


