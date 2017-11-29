//import components
import React from 'react';
import {Route} from 'react-router';

//import styles
import './style.css';

//import custom components
import Signup from './Signup';
import Userlist from './Userlist';
import Calculator from './Calculator';


const Home = () => {
  return (<div><h2>Hi</h2></div>)
}

const Content = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/sign-up" component={Signup}/>
      <Route path="/userlist" component={Userlist}/>
      <Route path="/calculator" component={Calculator}/>
    </div>
  )
};
export default Content;


