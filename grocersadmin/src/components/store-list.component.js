import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Store = props => (
    <tr>
      <td>{props.store.name}</td>
       <td>{props.store.email}</td>
      <td>{props.store.postal_code}</td>
      <td>{props.store.Address}</td> 
      <td>{props.store.province}</td> 
      <td>{props.store.country}</td> 
      <td>{props.store.phone}</td> 
      <td>{props.store.OwnerName}</td> 
      <td>{props.store.Open_time}</td> 
      <td>{props.store.Close_time}</td> 
      
      <td>
        <Link to={"/editStore/"+props.store._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStore(props.store._id) }}>delete</a>
      </td>
    </tr>
  )

export default class StoreList extends Component
{
    constructor(props)
    {
     super(props);
     this.deleteStore=this.deleteStore.bind(this);
        this.state={
            store:[]
    
        };

    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/Providers/display')
        .then(res=>{
            this.setState({
                store:res.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
       
        
    }
    deleteStore(id) {
      axios.delete('http://localhost:5000/api/Providers/deleteProvider/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
          //el is every element in exercise error so el._id will refer database id
        store: this.state.store.filter(el => el._id !== id)
      })
    }
    storelist()
    {
        return this.state.store.map(currentstore => {
            return <Store store={currentstore} deleteStore={this.deleteStore} key={currentstore._id}/>;
          })
    }
    render(){
        return(
            <div>
            <h3>All Stores</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Postal_Code</th>
                  <th>Address</th>
                  <th>Province</th>
                  <th>Country</th>
                  <th>Phone</th>
                  <th>OwnerName</th>
                  <th>Open Time</th>
                  <th>Close Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.storelist() }
              </tbody>
            </table>
          </div>
        )
    }
}