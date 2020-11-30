import  React,{Component}  from 'react'
import { Consumer } from './Context'
class Information extends Component{ 
    render(){
        const {customer,take,give}  =this.props.dukaan
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
     <button    className='r2'>  -      </ button>
     <span      className='r3'>  give   </span>
     <button    className='r2'>   +     </button>
     </span>
     <span      className='r4'> 
     <button    className='r2'>  -      </ button>
     <span      className='r5'>  take   </span>
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