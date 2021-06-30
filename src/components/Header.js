import React, { Component } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

 class Header extends Component {
    render() {
       const style={
           textDecoration:"none",
           paddingLeft:"30px",
           color:"white",
           fontWeight:"bold",
           fontSize:"20px"
       }
        return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark"> 
          <h2 className="navbar-brand"><img src="https://image.flaticon.com/icons/png/128/4977/4977431.png" style={{width:"50px"}} /></h2>
          <button className="navbar-toggler">
              <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navbarMenu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
                      <Link className="nav-item"  style={style} to="/"><li >Home</li></Link>
                      <Link className="nav-item"  style={style}  to="/services"><li >Services</li></Link>
                      <Link  className="nav-item" style={style} to="/socialmedia"><li >About</li></Link>
                      <Link className="nav-item"  style={style} to="/contact"><li >Contact</li></Link>

          </ul>
          </div>
          
         
        </div>










//             <div className="bs-example">
//     <nav className="navbar navbar-expand-md navbar-light bg-light">
//         <a href="#" className="navbar-brand">
//             <img src="" height="28" alt="LIBIN"/>
//         </a>
//         <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//             <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav">
            
//                       
//             </div>
//             <div className="navbar-nav ml-auto">
//                 <a href="#" className="nav-item nav-link">Login</a>
                    //    


//             </div>
//         </div>
//     </nav>
// </div>
        )
    }
}
export default Header;
