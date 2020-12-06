import React,{Component} from 'react'
//import { Link } from 'react-router-dom'
import { Consumer} from './Context'
import axios from 'axios'

class AddDukaan extends Component{
    constructor(props){
        super(props)
        this.state={
            shopkeeper:'',
            customer:'',
            take:'',
            give:''
        }
    }
    submitHandler = (event,mobileno) =>{
        
        this.setState({
            shopkeeper:mobileno,
            customer:parseInt(this.state.customer),
            take:parseInt(this.state.take),
            give:parseInt(this.state.give)
        },()=>{ axios
            .post('http://localhost:8080/dukaan',this.state)
            .then(response=>{
               console.log(response)
           })
            .catch(error=>{
                console.log(error)
            })
            event.preventDefault();
    }
)
}
    customerChange = event => {
        this.setState({
            customer:event.target.value
        })
    }

    takeChange = event => {
        this.setState({
            take:event.target.value
        })
    }
    giveChange = event => {
            this.setState({
                give:event.target.value
            })
    }
    render(){
        return(
            <Consumer>
                {value=>{
            const {customer,take,give} = this.state
            return(
                <div className='frontpage'>

            <form className='f-form' onSubmit={event=> {this.submitHandler(event , value.mobileno)}} >
            customer  <input type='number'  name='customer' value={customer} onChange={this.customerChange}/><br/>
            take    <input type='number'  name='take' value={take} onChange={this.takeChange}/><br/>
            give  <input type='number'  name='give' value={give} onChange={this.giveChange}/><br/>
            <button className='addDukaan' type='submit' > ADD DUKAAN</button>
            </form>
                    </div>
            )
            }}
            </Consumer>
        )
        }
    }

export default AddDukaan