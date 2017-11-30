import React,{ Component } from 'react';
import './style.scss';
import Textfield from './Formelements/Textfield';
import Buttonfield from './Formelements/Buttonfield';

class BuildForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
    };
  }
  // <input
  // type="text"
  // placeholder="Enter Todo"
  // onChange={(e) => this.setState({ description: e.target.value })}
  // value={this.state.description}
  // />
  enterValueEvent = (value) => {
    const set_value = (this.state.value1*10)+value;
    this.setState({value1:set_value});
    // console.log(this.state.value1);
  }

  render() {
    const { form_title, input_items:form_input , button_items:form_button } = this.props;
    const input_items = form_input.map((item, index)=>
                          <Textfield 
                            key={index} 
                            form_item={item}
                            v = {this.state.value1}
                        />);
    const button_items = form_button.map((item, index)=>
                          <Buttonfield 
                            handler={this.enterValueEvent} 
                            key={index} 
                            form_item={item}
                          />);
    return (<form>
              <h3>{form_title}</h3>
              {input_items}
              {button_items}
            </form>
            );
  }
}

export default BuildForm


