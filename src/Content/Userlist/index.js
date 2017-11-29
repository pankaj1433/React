import React,{ Component } from 'react';
import './style.scss';
import Usercard from './Usercard';
import fetch from 'isomorphic-fetch';



class Userlist extends Component {

  
  // componentDidMount () {
  //   fetch('https://api.onename.com/v1/search?query=wenger&app-id=demo-1234&app-secret=demo-1234')
  //   .then(res => res.json())
  //   .then(data => console.log(data.results[0],">>>>>>>>>>>>>>>>>>>>>") )
  //   .catch(err => console.log(err)) 
  // }
  render() {
    const users = [ {name: 'Julie', age: 26, tech: ['JS', 'CSS'] },
                        {name: 'Mark', age: 24, tech: ['Drupal', 'CSS'] },
                        {name: 'Jhon', age: 23, tech: ['MEAN', 'SCSS'] },
                        {name: 'Mat', age: 28, tech: ['JVM', 'CSS', 'HTML'] },
                        {name: 'Jhony', age: 25, tech: ['HTML', 'React.js'] },
                        {name: 'Bella', age: 26, tech: ['MEAN', 'React.js'] }]
    const user_list = users.map((item, index)=><Usercard user_id={index} user={item}/>)
    return (<div className="user-list">
                {user_list}
            </div>
            );
  }
}

export default Userlist