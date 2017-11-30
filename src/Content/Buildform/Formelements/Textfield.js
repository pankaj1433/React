import React,{ Component } from 'react';

class Textfield extends Component {

  constructor(props) {
    super(props);
    this.state = {
      val: props.v,
    };
  }
componentWillReceiveProps(newprops){  
    this.setState({
      val:newprops.v
    })
}
  render() {
    const { form_item } = this.props;
    const item_key = String(form_item).replace(' ','-').toLowerCase();
    return (<div className="form-group">
              <label name={form_item.replace(' ','-').toLowerCase()}>{form_item}</label>
              <input 
                className="form-control" 
                type="text" 
                id={item_key}
                value={this.state.val}
              />
            </div>
            );
  }
}

export default Textfield


