import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';


class App extends React.Component {

  state ={
    progress : 10
  }

  setprogress=(progress)=>
  {
    this.setState({progress : progress})
  }

  render() {
    return <div>
      <Router>
      <Navbar/>
      <LoadingBar
        height={4}
        color='#50C878'
        progress={this.state.progress}/>
      <Routes>
          <Route exact path="/JBI-News-App/" element={<News setprogress = {this.setprogress} key = "general" pagesize = {10} country = {'in'} category = {'general'}/>} />
          <Route exact path="/sports" element={<News setprogress = {this.setprogress} key = "sports" pagesize = {10} country = {'in'} category = {'sports'}/>}/>
          <Route exact path="/entertainment" element={<News setprogress = {this.setprogress} key = "entertainment" pagesize = {10} country = {'in'} category = {'entertainment'}/>}/>
          <Route exact path="/health" element={<News setprogress = {this.setprogress} key = "health" pagesize = {10} country = {'in'} category = {'health'}/>}/>
          <Route exact path="/science" element={<News setprogress = {this.setprogress} key = "science" pagesize = {10} country = {'in'} category = {'science'}/>}/>
          <Route exact path="/sports" element={<News setprogress = {this.setprogress} key = "sports" pagesize = {10} country = {'in'} category = {'sports'}/>}/>
          <Route exact path="/business" element={<News setprogress = {this.setprogress} key = "business" pagesize = {10} country = {'in'} category = {'business'}/>}/>
      </Routes>
      </Router>
      <Footer/>

    </div>;
  }
}

export default App;

