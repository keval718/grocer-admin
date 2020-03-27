import React, {Component} from 'react';

import axios from 'axios';




export default class EditsStore extends Component
{
    constructor(props){
        super(props);
        
        
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangePostal_Code=this.onChangePostal_Code.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onChangeProvince=this.onChangeProvince.bind(this);
        this.onChangeCountry=this.onChangeCountry.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeOwnerName=this.onChangeOwnerName.bind(this);
        this.onChangeOpenTime=this.onChangeOpenTime.bind(this);
        this.onChangeCloseTime=this.onChangeCloseTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       this.state={
            name:"",
            email:"",
            password:"",
            postal_code:"",
            Address:"",
            province:"",
            country:"",
            phone:"",
            OwnerName:"",
            Open_time:"",
            Close_time:""
        }
     

    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/Providers/display/'+this.props.match.params.id)
          .then(response => {
            this.setState({
            name:response.data.name,
            email:response.data.email,
            password:response.data.password,
            postal_code:response.data.postal_code,
            Address:response.data.Address,
            province:response.data.province,
            country:response.data.province,
            phone:response.data.phone,
            OwnerName:response.data.OwnerName,
            Open_time:response.data.Open_time,
            Close_time:response.data.Close_time
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
    
        // axios.get('http://localhost:5000/users/')
        //   .then(response => {
        //     if (response.data.length > 0) {
        //       this.setState({
        //         users: response.data.map(user => user.username),
        //       })
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
    
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
    onChangePostal_Code(e){
        this.setState({
            postal_code:e.target.value
        })
    }
    onChangeAddress(e){
        this.setState({
            Address:e.target.value
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
    onChangeOwnerName(e){
        this.setState({
            OwnerName:e.target.value
        })
    }
    onChangeOpenTime(e){
        this.setState({
            Open_time:e.target.value
        })
    }
    onChangeCloseTime(e){
        this.setState({
            Close_time:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        console.log(this.state.Close_time);
        const store={
           
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            postal_code:this.state.postal_code,
            Address:this.state.Address,
            province:this.state.province,
            country:this.state.country,
            phone:this.state.phone,
            OwnerName:this.state.OwnerName,
            Open_time:this.state.Open_time,
            Close_time:this.state.Close_time
            
        }
        
       // console.log(store);
        axios.post('http://localhost:5000/api/Providers/update/'+ this.props.match.params.id,store)
        .then(res=>console.log(res.data));
        //this will send to home page
        //window.location="/";
    }
    render()
    {
        return(
            <div>
                <h3>Add New Store</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>Password: </label>
          
          <input 
              type="password" 
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
          
        </div>
        <div className="form-group">
          <label>Postal Code: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.postal_code}
              onChange={this.onChangePostal_Code}
              />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group">
          <label>Province: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.province}
              onChange={this.onChangeProvince}
              />
        </div>
        <div className="form-group">
          <label>Country: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.country}
              onChange={this.onChangeCountry}
              />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group">
          <label>Owner Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.OwnerName}
              onChange={this.onChangeOwnerName}
              />
        </div>
        <div className="form-group">
          <label>Open Time: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Open_time}
              onChange={this.onChangeOpenTime}
              />
        </div>
        <div className="form-group">
          <label>Close Time: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Close_time}
              onChange={this.onChangeCloseTime}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Store" className="btn btn-primary" />
        </div>
      </form>
            </div>
            
        )
    }
}