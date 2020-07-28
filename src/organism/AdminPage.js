import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import './Login.js';
const permission = true;
 
class AdminPage extends Component {
    state = { 
        data: []
     }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=40')
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
    <Route render={()=>(permission ? myData : <Redirect to="/login"/> )}/>
    </div>
    )
    }
}
 
export default AdminPage;

   
