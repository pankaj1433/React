import React,{ Component } from 'react';

class Buttonfield extends Component {
  render() {
    const { form_item } = this.props;
    return (<div key={this.props.key} className="form-group-submit">
              <input className="btn btn--form" 
              type="Button" 
              value={form_item} 
              id={String(form_item).replace(' ','-').toLowerCase()}/>
            </div>
            );
  }
}

export default Buttonfield


