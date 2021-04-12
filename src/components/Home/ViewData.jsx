import React, {Component} from 'react';
import s from './ViewData.module.css';

class ViewData extends Component{
    render() {
      return(
        <div className = {s.div}>
          <h5>{this.props.data.id}</h5>
          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.body}</p>
        </div>
      );
    }
  }

export default ViewData;