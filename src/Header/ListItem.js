import React,{ Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class ListItem extends Component {
  render() {
    const { href, text } = this.props;
    return (
            <li className="nav-item">
            <a href="{href}" >{text}</a>
            </li>
            );
  }
}

export default ListItem