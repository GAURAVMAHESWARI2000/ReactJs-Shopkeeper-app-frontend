import React,{Component} from 'react'
import { Consumer } from './Context'
import UI from './UI'

class Overview extends Component{
    render(){
        return (
            <React.Fragment>
            <UI/>
            <Consumer> 
                {value=>{
                    const post =value.posts.find(post=>post.mobileno===value.mobileno)
               return( <div className='amount'>
                <div className='naam'>{post.name}</div> 
                    <h5 className="get">Total Amount to Get</h5>
                    <h5 className="pay">Total Amount to Pay</h5>
               </div>)
               }    }        
            </Consumer>
            
            </React.Fragment>
        )
    }
}

export default Overview