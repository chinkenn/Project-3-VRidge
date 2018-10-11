import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Form.css";
// import "./movement.js";
import Cookies from 'universal-cookie';
import logo from "../Nav/images/logo.png";

const loginForm = { maxWidth: '360px' };


const cookies = new Cookies();

class FormHeader extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: "",
    submitted: false
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
   
    event.preventDefault();
      //this is after api call
    console.log(this.state.username);
    console.log(this.state.password);
    cookies.set(this.state.username, this.state.password, { path: '/'});
    this.setState({submitted: true });
    // <Link
    //   to={"/groceryList/" + this.state.username}
    // >
    // </Link>
  }

  render() {
    if(this.state.submitted)
      return <Redirect to={'/groceryList/' + this.state.username }/>
      
    return (

        <div className="login-bg">
          <div className="login-page">
          <div className="login-form" style={loginForm}>  
          <img src={logo} width="180" height="90"/>
          <form className="register-form">
            <input 
              type="text" 
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}    
            /> 
            <input 
              type="password" 
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}    
            />
            <input 
              type="text" 
              placeholder="email address"
              name="email address"
              value={this.state.emailaddress}
              onChange={this.handleInputChange}    
            />             
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
            <form className="login">
              {/* <p>Username: {this.state.username}</p>
              <p>Password: {this.state.password}</p>  */}
              <input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <button onClick={this.handleSubmit.bind(this)}>login</button>
              <p className="message">Not registered? <a href="#">Create an account</a></p>
              {/* <button onClick={this.handleFormClear}>Cancel</button> */}
          </form>
          </div>
        </div>
        </div>
   
    );
  }
}

export default FormHeader;


 