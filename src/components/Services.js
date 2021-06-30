import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './services.css';
import Front from './Front';

 class Services extends Component {
    render() {
        return (
            <div className="tech container" >
                <h1 className="h1">TECHNOLOGIES</h1>
            <div className="container-fluid" >
              
  <div className="hero-container">
  <div className="row ">
   <div className=" col-xl-2 col-lg-4 col-md-11 col-11    col-sm-11  d-flex justify-content-center ">
   <div className="main-container">
      <div className="poster-container">
       <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png" className="poster" />
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title"></h4>
          <p className="ticket__movie-slogan">
          </p>
          <p className="ticket__current-price"></p>
          <p className="ticket__old-price"></p>
          <button className="ticket__buy-btn">Bootstrap</button>
        </div>
      </div>
    </div>
   </div>
​       <div className=" col-xl-2 col-lg-4 1 col-11  offset-lg-1 col-sm-11   d-flex justify-content-center  ">
   <div className="main-container">
      <div className="poster-container">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/WHATWG_JavaScript_logo.svg/800px-WHATWG_JavaScript_logo.svg.png" className="poster" />
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title"></h4>
          <p className="ticket__movie-slogan">
          </p>
          <p className="ticket__current-price"></p>
          <p className="ticket__old-price"></p>
          <button className="ticket__buy-btn">Javascript</button>
        </div>
      </div>
    </div>
   </div>
   <div className=" col-xl-2 col-lg-4 1 col-11  offset-lg-1 col-sm-11  d-flex justify-content-center">
   <div className="main-container">
      <div className="poster-container">
       <img src="https://image.flaticon.com/icons/png/512/174/174854.png" className="poster bg-dark" />
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title"></h4>
          <p className="ticket__movie-slogan">
          </p>
          <p className="ticket__current-price"></p>
          <p className="ticket__old-price"></p>
          <button className="ticket__buy-btn">HTML</button>
        </div>
      </div>
    </div>
   </div>
   <div className=" col-xl-2 col-lg-4 1 col-11  offset-lg-1 col-sm-11  d-flex justify-content-center ">
   <div className="main-container">
      <div className="poster-container">
       <img src="https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg" className="poster" />
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title"></h4>
          <p className="ticket__movie-slogan">
          </p>
          <p className="ticket__current-price"></p>
          <p className="ticket__old-price"></p>
          <button className="ticket__buy-btn">React</button>
        </div>
      </div>
    </div>
   </div>
		</div>
	</div>
    </div>

    <Front />
    


                </div>
            
        )
    }
}
export default Services
