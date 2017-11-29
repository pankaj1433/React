import React,{ Component } from 'react';
import './style.scss';

class Usercard extends Component {
  render() {
    const {user_id, user} = this.props;
    const user_tech = user.tech.map((item,index)=><div className="tech-item">{item}</div>)
    return (<div className="user-card">
              <div className="user-name"><h2>{user.name}</h2></div>
              <div className="user-age"><h3>Age: {user.age}</h3></div>
              <div className="user-tech-list">{user_tech}</div>
            </div>
            );
  }
}

export default Usercard