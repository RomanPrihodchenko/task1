import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddingPost from './components/AddingPost/AddingPost';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>

          <div className="row">
            <div className="col-md">
              <Header />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3">
              <Navbar />
            </div>
            <div className="col-md-9">
              <div className='app-wrapper-content'>
                <Login setToken={setToken} />
              </div>
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        {/*<div className="container-fluid">*/}
        <div className="row">
          <div className="col-md">
            <Header />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-3">
            <Navbar />
          </div>
          <div className="col-md-9">
            <div className='app-wrapper-content'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/addingpost' component={AddingPost} />
                <Route path='/login' component={Login} />
              </Switch>
            </div>
          </div>
        </div>
        {/*</div>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
