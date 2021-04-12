import React, {Component} from 'react';
import ViewData from './ViewData';
import naturephoto from '../Images/photo1.jpeg';

class Home extends Component {
    constructor (){
    super ();
    this.state={
      serverData: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(data => this.setState({serverData: data}));
  }
  render() {
    return (
      <div className="Home">
        <img src={naturephoto} alt="nature" />
        {this.state.serverData ? this.state.serverData.slice(0, 9).map(data =>
        <ViewData data={data} />
        ) : 'No data'}
      </div>
    );
  }
}

export default Home;