import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Socialmedia from './components/Socialmedia';
import Contact from './components/Contact';
import {BrowserRouter as Router,Switch, Route} from  'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
     
        <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/services" component={Services }/>
        <Route path="/socialmedia" component={Socialmedia}/>
        <Route path="/contact" component={Contact} />
        </Switch>
       <Footer />
     
    </div>
    </Router>
  );
}

export default App;
