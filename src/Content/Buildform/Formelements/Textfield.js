import React,{ Component } from 'react';

class Textfield extends Component {
  render() {
    const { form_item } = this.props;
    return (<div className="form-group">
              <label for={form_item.replace(' ','-').toLowerCase()}>{form_item}</label>
              <input className="form-control" type="text" id={form_item.replace(' ','-').toLowerCase()}/>
            </div>
            );
  }
}

export default Textfield


