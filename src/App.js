import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
            <main>
              <Header />
              <Router>
                <Content />
              </Router >
              <Footer />
            </main>
            );
  }
}

export default App




