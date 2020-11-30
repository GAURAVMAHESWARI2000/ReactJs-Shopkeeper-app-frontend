import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class SignUpPage extends Component{
    constructor(props){
        super(props)
        this.state={
            mobileno:'',
            name:'',
            password:''
        }
    }

    mobileChange = event =>{
        this.setState({mobileno:event.target.value})
    }
    nameChange = event =>{
        this.setState({name:event.target.value})
    }
    passwordChange = event =>{
        this.setState({password:event.target.value})
    }

    submitHandler = event =>{
        axios
            .post('http://localhost:8080/shop',this.state)
            .then(response=>{
            })
            .catch(error=>{
                console.log(error)
            })
            event.preventDefault();
    }

    
    render(){
        const {mobileno,name,password} = this.state
        return(
            <div className='frontpage'>
            <div className='f-dukaandari'> dukaandari</div>

        <form className='f-form' onSubmit={this.submitHandler} >
          mobile  <input type='number'  name='mobile' value={mobileno} onChange={this.mobileChange}/><br/>
          name    <input type='text'  name='name' value={name} onChange={this.nameChange}/><br/>
          password  <input type='password'  name='password' value={password} onChange={this.passwordChange}/><br/>
            <button className='submit' type='submit' > Submit</button>
        </form>
               <div className='already'>Already have an account</div>
                <Link to='/'><button className='signup'> SIGNIN</button></Link>
            </div>
        )
    }
}

export default SignUpPage