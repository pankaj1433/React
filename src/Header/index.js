import React,{ Component } from 'react';
import './style.css';
import ListItem from './ListItem';


class Header extends Component {
  render() {
    const navItems = ['Home','About','Contact','Help','Jobs'];
    const lis = navItems.map((item, index)=> <ListItem key={index} href="#" text={item}/>)
    return (<header className="header">
              <ul>
                {lis}
              </ul>
            </header>);
  }
};

export default Header