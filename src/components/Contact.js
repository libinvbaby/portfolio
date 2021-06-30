import React, { Component } from 'react';
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


 class Contact extends Component {
    render() {
      
        return (
            <div  >
                <div className="contact">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12">
				<h2>Get in touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. <br/> Dolore magna aliquam erat volutpat.</p>
			</div>
			<div className="col-md-8 col-sm-8 mt30">
				<form action="#" method="post" role="form">
					<div className="col-md-12 col-sm-12 col-xl-6">
                        <label for="name">NAME</label>
                        <input name="name" type="text" className="form-control" id="name" required/>
                      <label for="email">EMAIL</label>
                        <input name="email" type="email" className="form-control" id="email"n required/>
					</div>
					<div className="col-md-6 col-sm-12 col-lg-12 col-xl-6">
						<label className="message" for="message">MESSAGE</label>
						<textarea name="message" rows="6" className="form-control" id="message" required></textarea>
					</div>
                    <div className="col-md-12 col-sm-12  btn">
                    	<button type="submit" name="submit" className=" btn btn-primary">SEND</button>
                    </div>
				</form>
			</div>
			<div className="col-md-4 col-sm-4 address">
				<div>
					<h3>Email</h3>
					<p>libinvbaby7@gmail.com</p>
				</div>
				<div>
					<h3>Phones</h3>
					<p>7907778900 </p>
				</div>
			</div>
			
		</div>
	</div>
</div>            
            </div>
        )
    }
}
export default Contact;
