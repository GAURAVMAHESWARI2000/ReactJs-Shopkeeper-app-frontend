import  React,{Component}  from 'react'
import { Consumer } from './Context'
//import axios from 'axios'
class Information extends Component{ 
    render(){
        const {shopkeeper,customer,take,give}  =this.props.dukaan
        return(
             <Consumer>
                 {value =>{
                      const Customer=value.posts.find(post=>post.mobileno===customer)
                     return(
                         <React.Fragment>
                     <div className ='information'> 
                       <div className ='name'>     {Customer.name}    <span className ='mobile'>{Customer.mobileno}</span>   </div>
                       <div className ='getmoney'>  get - {take} </div>
                       <div className ='paymoney'>   pay - {give}     </div>
                       
                   </div>
     <span      className='r1'> 
     <button    className='r2' onClick={()=>this.decreaseGet(shopkeeper,customer,take,give)}>  -      </ button>
     <span      className='r3'>  GET   </span>
     <button    className='r2'>   +     </button>
     </span>
     <span      className='r4'> 
     <button    className='r2'>  -      </ button>
     <span      className='r5'>  PAY   </span>
     <button    className='r2'>   +     </button>
     </span> 
                   </React.Fragment>
                    )
                 }}
        
             </Consumer>
               
        )
    }

}

export default Information