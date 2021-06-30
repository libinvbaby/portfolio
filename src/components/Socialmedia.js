import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./socialmedia.css"

 class Socialmedia extends Component {
    render() {
        return (
            <div className="container">
             
              
                <h1 style={{fontSize:"8vh",paddingTop:"80px",color:"darkcyan",fontFamily:"'Overpass', sans-serif"}}>ABOUT ME</h1>
             <div className="d-flex justify-content-center ">
                 
             <Flippy 
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '500px', height: '700px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1461800919507-79b16743b257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)',
        backgroundSize:"500px 700px",
        borderRadius:"30px" ,
        cursor:"pointer"
      }}
    >

    </FrontSide>
    <BackSide
      style={{ backgroundImage:"url(https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80)",
      backgroundSize:"500px 700px",borderRadius:"30px" ,cursor:"pointer"
      }}>
    </BackSide>
  </Flippy>
  
               

             </div>
             <div className=" container col-lg-8 ">
                    <h2 className="intro">Hello and welcome! I'm a <span>web developer</span> based in India, specializing in web development.

         where i focus on delivering high quality visual and technical solutions for global and local clients.</h2>
                </div>
            </div>
        )
    }
}
export default Socialmedia