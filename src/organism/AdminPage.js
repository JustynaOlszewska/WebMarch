import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import './Login.js';
import { BASIC_URL } from "../constants";
import { PATH_ROUTER } from "../constants";

const permission = true;
 
class AdminPage extends Component {
    state = { 
        data: []
     }
    componentDidMount(){
        fetch(BASIC_URL)
      .then(response=> response.json())
      .then(data=> this.setState({data: data.results}))

    }
    render() { 

        const myData = this.state.data.map(result=> {
            return (
               
                      <figure className='dataUsers'>
                          <img className="dataUsers__image" src= {result.picture.large}  alt="whoReadAboutHealth"/>
                             <figcaption className='dataUsers__name'>
                             {result.name.first} {result.name.last}    
                             </figcaption>
                          
                         </figure>  
                      
            )        
        })

        console.log(myData)
        return ( 
            <div className='listUsers'>
    <Route render={()=>(permission ? myData : <Redirect to={PATH_ROUTER.login} /> )}/>
    </div>
    )
    }
}
 
export default AdminPage;

   
