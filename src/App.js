import React, { Component } from 'react'
import './App.css';
import SignUpPage from './Components/SignUpPage'
import SignInPage from './Components/SignInPage'
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Overview from './Components/Overview'

import Details from './Components/Details'
import { Provider } from './Components/Context';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
        mobileno:'',
        dukaan:'',
        posts:[]
    }
}

componentDidMount(){
  axios
  .get('http://localhost:8080/shop')
  .then(response=>{
      this.setState({posts:response.data})  
  })
  .catch(error=>{
      console.log(error)
      this.setState({errmsg:'Error retrieving data'})
  })
}

getShop = id=>{
         const mobogenie = this.state.posts.find(post => post.mobileno ===id);
         this.setState({
           mobileno:mobogenie.mobileno
         },()=>console.log(this.state.mobileno))
       }

  render(){
  return (
    <div className="App">
      <Provider value={{
        posts:this.state.posts,
        mobileno:this.state.mobileno,
        getShop: this.getShop
        } }>
      <Switch>
        <Route exact path='/' component={SignInPage}/>
        <Route path='/signup' component={SignUpPage}/>
        <Route  path="/over" component={Overview}/>
        <Route path="/details" component={Details}/>
        <Route  render={() =>"Page not found"}/>
      </Switch>
      </Provider>
    </div>
  )
  }
}
export default App;
