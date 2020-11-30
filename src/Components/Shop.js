import React,{Component} from 'react'
import { Consumer } from './Context'
import Information from './Information'

class Shop extends Component {
    constructor(props){
        super(props)
        this.state={
            whether:true
        }
    }

    showInformation =()=>{
        this.setState({
            whether:!this.state.whether
        })
    }
    
    render(){
        const {customer} =this.props.dukaan
        return(
            <Consumer>
                {value=>{
                   // const ShopKeeper=value.posts.find(post=>post.mobileno===shopkeeper)
                    const Customer=value.posts.find(post=>post.mobileno===customer)
                    if(this.state.whether){
                        return(
                             <div className='data' onClick={this.showInformation}>  
                            <div className='name'>{Customer.name}</div>  
                            <div className='mobile'>{Customer.mobileno}</div>
                          </div>
                        )
                    }
                    else{
                        return (
                            <React.Fragment>
                                 <Information dukaan={this.props.dukaan}/>
                           {/* //    <button onClick={this.showInformation  }> Back</button> */}
                            </React.Fragment>
                       
                        )}
                   
                }}
            </Consumer>
        )
    }
    


}


export default Shop