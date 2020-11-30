// import React,{Component} from 'react'
// import { Switch , Route } from 'react-router-dom'
// import './App.css'
// import Information from './components/Information'

// import axios from "axios";
// import Dukaandari from './components/Dukaandari'
//     componentDidMount(){
//         axios
//         .get('http://localhost:8080/shop')
//         .then(response=>{
//             console.log(response)
//             this.setState({posts:response.data})  
//         })
//         .catch(error=>{
//             console.log(error)
//             this.setState({errmsg:'Error retrieving data'})
//         })
//     }

//     getShop = id=>{
//       const Shop = this.state.posts.find(post => post.mobileno ===id);
//       this.setState({
//         Shop:Shop
//       })
//     }
//         <Switch>
//           <Route path="/information" component= { Information }/>
//           <Route  render={ ()=> "Page not Found"}/>
//         </Switch>
        
//         <Dukaandari/>
       

//     </div>
//   )
// }
// }
// export default App;
