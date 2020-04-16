import React, {Component} from 'react';
import axios from 'axios';

const User = props => (
    <tr>
      <td>{props.store.name}</td>
       <td>{props.store.email}</td>
      <td>{props.store.postal_code}</td>
      <td>{props.store.street_address}</td> 
      <td>{props.store.province}</td> 
      <td>{props.store.country}</td> 
      <td>{props.store.phone}</td> 

    </tr>
  )



export default class UserList extends Component
{
    constructor(props)
    {
     super(props);
   //  this.deleteExercise=this.deleteExercise.bind(this);
        this.state={
            user:[]
    
        };

    }

    componentDidMount(){
        axios.get('http://grocer-server.herokuapp.com/api/users')
        .then(res=>{
            this.setState({
                user:res.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
       
        
    }
    // deleteExercise(id) {
    //     axios.delete('http://localhost:5000/exercises/'+id)
    //       .then(response => { console.log(response.data)});
    
    //     this.setState({
    //         //el is every element in exercise error so el._id will refer database id
    //       exercise: this.state.exercise.filter(el => el._id !== id)
    //     })
    //   }
    usersList(){
        return this.state.user.map(currentuser => {
            return <User store={currentuser} />
          })
    }
    render(){
        return(
            <div>
            <h3>All Users</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Postal_code</th>
                  <th>Street_Address</th>
                
                  <th>Province</th>
                  <th>Country</th>
               
                  <th>Phone Number</th>
                
                </tr>
              </thead>
              <tbody>
                { this.usersList()}
              </tbody>
            </table>
          </div>
        )
    }
}