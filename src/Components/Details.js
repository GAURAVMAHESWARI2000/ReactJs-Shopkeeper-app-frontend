import React,{Component} from 'react'
import { Consumer } from './Context'
import Shop from './Shop'
import axios from 'axios'
import UI from './UI'


class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            dukaans:[],
            mobileno:''
       }
    }
    componentDidMount(){
        axios
        .get('http://localhost:8080/dukaan')
        .then(response=>{
            this.setState({
                dukaans:response.data  })  
        })
        .catch(error=>{
            console.log(error)
            this.setState({errmsg:'Error retrieving data'})
        })
      }

      getDukaan = shop=>{
        const dukaan = this.state.dukaans.find(dukaan => dukaan ===shop);
        console.log(dukaan)
      }

        render(){
            return(
                <React.Fragment>
                <UI/>
                <Consumer >
                    { value => {
                 const dukaans=this.state.dukaans.filter(dukaan=>dukaan.shopkeeper===value.mobileno)          
       return(  
     dukaans.map(dukaan=><Shop key={dukaan.customer} dukaan={dukaan} getDukaan={this.getDukaan}/>)
       ) 
                    }}
                </Consumer >
               </React.Fragment>
            )
            
        }
    }

    export default Details

