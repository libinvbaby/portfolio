import React, { Component } from 'react';
import "./Footer.css" ;
import { Link } from 'react-router-dom';


 class Footer extends Component {
    render() {
        const style={
            listStyleType:"none",
            textDecoration:"none",
            paddingLeft:"30px",
            color:"black",
            fontWeight:"bold",
            fontSize:"20px"
        }
         
        return (
            <div style={{backgroundImage:"url(https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg)",backgroundSize:"100%",paddingBottom:"30px",}}>
                <div className="container new">
                    <div className="row d-flex justify-content-around">
                        <div className="col-lg-4 col-md-3 col-sm-4" >
                            <h2>Libin</h2>
                            <p>Email:libinvbaby7@gmail.com</p>
                            <p>Phone NO:7907778900</p>
                            <p>website is free Bootstrap v3.3.5 HTML5 layout from templatemo website. Feel free to use it for your website.</p>
                        </div>
                        <div className="col-lg-4 col-lg-4 col-sm-4">
                            <h2>Usefull Links</h2>
                            <Link   style={style} to="/"><li >Home</li></Link>
                            <Link style={style}  to="/services"><li >Services</li></Link>
                           <Link  style={style} to="/socialmedia"><li >About</li></Link> 
                        </div>
                       <div className="row justify-content-center">
                       <div className="col-lg-4 col-lg-4 col-sm-4">
                            <h2 className="copy">@copywrite libinvbaby</h2>
                            
                      </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
