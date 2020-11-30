import React,{Component} from 'react'
import { Link } from 'react-router-dom'
class UI extends Component{
    render(){
        return (
            <div className='ui'>
                <Link  className='over' to="/over">Overview</Link >
                <Link  className='details' to="/details"> Details</Link >
            </div>
        )
}
}
export default UI