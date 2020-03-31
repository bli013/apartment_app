import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import MyListing from './pages/MyListing'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <h1>This is the react app component</h1>
          <NavItem>
            <NavLink to="/home" tag={ Link }>Home</NavLink>
          </NavItem>
        <Route path="/home" exact component={ Home } />  
        </>
      </Router>
    );
  }
}

export default App
