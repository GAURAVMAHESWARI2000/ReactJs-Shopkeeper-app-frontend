import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { Consumer} from './Context'
import Overview from './Overview'

class SignInPage extends Component{
    constructor(props){
        super(props)
        this.state={
            mobileno:'',
            password:'',
            next:''
        }
    }
    submitHandler = (event,posts) => {
        event.preventDefault()
        const obj = posts.find(post=> post.mobileno===parseInt(this.state.mobileno)  )
         if(obj===undefined){
             this.setState({
                 next:false
             })
         }
         else{
             if(obj.password===this.state.password){
             this.setState({
                 next:true
             })
         }
         else{
             this.setState({
                 next:false
             })
         }
         }


    }
    mobileChange = event => {
        this.setState({
            mobileno:event.target.value
        })
    }
    passwordChange = event => {
        this.setState({
            password:event.target.value
        })
    }
    render(){
        return(
            <Consumer>
                {value=>{
                    if(!this.state.next)
                    return(
                        <div className='frontpage'>
                        <div className='f-dukaandari'> dukaandari</div>
                        <form className='f-form' onSubmit={event=> {this.submitHandler(event,value.posts);value.getShop(parseInt(this.state.mobileno)) }
                        } >
                             mobile   <input type='number' value={this.state.mobileno} onChange={this.mobileChange}/><br/>
                             password    <input type='password' value={this.state.password} onChange={this.passwordChange}/>
                             <button type='submit' className='submit'>Submit</button>
                            </form>
                            <div className='already'>create a new account</div>
                          <Link to='/signup'>  <button className='signup'> SIGNUP</button></Link>
                        </div>
                    )
                    else{
                         return <Overview/>
                    }
                }}
            </Consumer>
        )
        }
    }

export default SignInPage