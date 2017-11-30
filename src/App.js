import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Test from './Test'

import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  state = {
    user: {
      name:'aaa', 
      age:12
    }
  }
  changeUser = () => {
    this.setState ({
      user: {name: 'pankaj', age: 24}
    })
  }
  render() {
    return (
      // const {user} = this.state.user;
            <main>
              <Header />
              <Router>
                <Test num1={2} num2={4} user={{name:"jhon",age:22}}/>
                {/* <Content /> */}

              </Router >
              <Footer />
            </main>
            );
  }
}

export default App




