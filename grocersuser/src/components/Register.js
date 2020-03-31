import React, { Fragment, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';

export default class Register extends Component {

    constructor(){
        super();
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangePostal_code=this.onChangePostal_code.bind(this);
        this.onChangeStreet_address=this.onChangeStreet_address.bind(this);
        this.onChangeProvince=this.onChangeProvince.bind(this);
        this.onChangeCountry=this.onChangeCountry.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         this.state={
            name:"",
            email:"",
            password:"",
            postal_code:"",
            street_address:"",
            province:"",
            country:"",
            phone:""
        }
 
  }
  onChangeName(e){
      this.setState({
          name:e.target.value
      })
  }
  onChangeEmail(e){
    this.setState({
        email:e.target.value
    })
}
onChangePassword(e){
    this.setState({
        password:e.target.value
    })
}
onChangeStreet_address(e){
    this.setState({
        street_address:e.target.value
    })
}
onChangePostal_code(e){
    this.setState({
        postal_code:e.target.value
    })
}
onChangeProvince(e){
    this.setState({
        province:e.target.value
    })
}
onChangeCountry(e){
    this.setState({
        country:e.target.value
    })
}
onChangePhone(e){
    this.setState({
        phone:e.target.value
    })
}

  
  
  


   onSubmit (e){
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      postal_code:this.state.postal_code,
      street_address:this.state.street_address,
      province:this.state.province,
      country:this.state.country,
      phone:this.state.phone
    };

    axios
      .post('http://localhost:5000/api/users/adduser', data, config)
      .then(response => {
        let decodeddata = decode(response.data.token);
        console.log(decodeddata);
        sessionStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.log('error ', error);
      });
  };
  render(){
  return (
  <div>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={this.onSubmit}>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.onChangeName}
            required
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={this.state.password}
            onChange={this.onChangePassword}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Postal_code'
            name='postal_code'
            value={this.state.postal_code}
            onChange={this.onChangePostal_code}
            required
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Street Address'
            name='street_address'
            value={this.state.street_address}
            onChange={this.onChangeStreet_address}
            required
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Province'
            name='province'
            value={this.state.province}
            onChange={this.onChangeProvince}
            required
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Country'
            name='country'
            value={this.state.country}
            onChange={this.onChangeCountry}
            required
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='phone'
            name='phone'
            value={this.state.phone}
            onChange={this.onChangePhone}
            required
          />
        </div>
      
        <input type='submit' value='Register' />
      </form>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
      </div>
  );
  }
};


