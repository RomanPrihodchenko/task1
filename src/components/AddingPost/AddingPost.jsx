import React, { Component } from 'react';
import s from './AddingPost.module.css';
import naturephoto from '../Images/photo1.jpeg';

class AddingPost extends Component {

  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Title of the new post.',
        body: 'New post added. Hello, World.',
        userId: 2
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        user: json
      });
    });
  }
  render() {
    return (
      <div className="AddingPost">
        <img src={naturephoto} alt="nature" />
        <div className={s.div}>
          <p><b>A new resource has been created on the server.</b></p>
          <p>Id : {this.state.user.id}</p>
          <p>Title : {this.state.user.title}</p>
          <p>Body : {this.state.user.body}</p>
          <p>UserId : {this.state.user.userId}</p>
        </div>
      </div>
    )
  }
}
export default AddingPost;