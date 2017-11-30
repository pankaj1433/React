import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Test extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      amt : '',
    }
  }
  componentWillMount () {
    console.log(this.state);
  }
  
  changeHandler = (event) => {
    this.setState ({
      amt: event.target.value     
    });
  }
  render() {
    return (
            <div>
              {/* <input onChange={this.changeHandler} value={this.state.amt}/> */}
              {this.props.num1 + this.props.num2}
            </div>
            );
  }
}
//this only validates props and throw warnings on console.
//https://github.com/facebook/prop-types
Test.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number,
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  })
}

Test.defaultProps = {
  num1: 1,
}

export default Test


