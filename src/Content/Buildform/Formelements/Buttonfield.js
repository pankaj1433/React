import React,{ Component } from 'react';

class Buttonfield extends Component {
  render() {
    const { form_item } = this.props;
    const item_key = String(form_item).replace(' ','-').toLowerCase();
    return (<div className="form-group-submit">
              <input className="btn btn--form" 
              type="Button" 
              value={form_item}
              onClick = {(e) => this.props.handler(parseFloat(e.target.value))}
              id={item_key}/>
            </div>
            );
  }
}

export default Buttonfield


