import React, { Component } from 'react';
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Socialmedia from './Socialmedia';
import Services from './Services';
import Contact from './Contact';
import Front from './Front';



 class Home extends Component {
    render() {
        return (
            <div  style={{backgroundImage:"url(https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg)",backgroundSize:"100%",paddingBottom:"30px"}}>
                
               
                 <div  className="container">
                     <div className="row " >
                 <div className="col-xl-6  col-lg-6 order-2 " >
                    <div className="image1"> 
                       <img src="https://images.unsplash.com/photo-1486663845017-3eedaa78617f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
                    </div>
                     </div>
                <div className="col-xl-6 col-lg-6 col-md-11 col-10 order-1">
                <h1 className="heading">THANK YOU </h1>
                <h1 className="heading">FOR </h1>
                <h1 className="heading">  INVADING</h1>
                <h1 className="heading"> MY SPACE</h1>
                </div>
                </div>
                </div>
                <br></br>
                <Socialmedia />
                
             <Services  />
             <br />
             
            
            <Contact />
        

            </div>
        )
    }
}
export default Home;