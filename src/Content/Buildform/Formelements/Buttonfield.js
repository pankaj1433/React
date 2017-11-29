import React,{ Component } from 'react';

class Buttonfield extends Component {
  render() {
    const { submit_value } = this.props;
    return (<div className="form-group-submit">
              <input className="btn btn--form" type="Submit" value={submit_value} id={submit_value.replace(' ','-').toLowerCase()}/>
            </div>
            );
  }
}

export default Buttonfield


