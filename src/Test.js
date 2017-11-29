import React,{ Component } from 'react';


class Test extends Component {
  constructor () {
    super();
    this.state = {
      amt : '',
    }
  }
  changeHandler = (event) => {
    this.setState ({
      amt: event.target.value     
    });
  }
  render() {
    return (
            <div>
              <input onChange={this.changeHandler} value={this.state.amt}/>
            </div>
            );
  }
}

export default Test


