import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import CreateStore from "./components/create-store.component";
import StoreList from "./components/store-list.component";
import EditStore from "./components/edit-store.component";

function App() {
  return (
    <Router>
      {/* <div className="container"> */}

        <Navbar/>
        <br/>
        <Route path="/" exact component={UserList}></Route>
        <Route path="/storeList" exact component={StoreList}></Route>
        <Route path="/createStore" component={CreateStore} /> 
        <Route path="/editStore/:id" component={EditStore} />

        <Route path="/editUser/:id" component={EditUser} />

      {/* </div> */}
    </Router>
  );
}

export default App;
