import React from 'react';
import './style.css';
import Signup from './Signup';
import Userlist from './Userlist';
import {Route} from 'react-router';

const Home = () => {
  return (<div><h2>Hi</h2></div>)
}

const Content = () => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/sign-up" component={Signup}/>
      <Route path="/userlist" component={Userlist}/>
    </div>
  )
};
export default Content;


