import React, {useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './Login.js';
import { BASIC_URL } from "../constants";
import { PATH_ROUTER } from "../constants";
import { permission } from "../utility"

 

 const AdminPage = () => {
    const [data, newdata] = useState([]) 

    useEffect(() =>{
                fetch(BASIC_URL)
                    .then(response => response.json())
                    .then(data =>  newdata(data.results))     
            },[])
            const myData = data.map(result => {
     return ( 

                <figure className='dataUsers'>
                    <img className="dataUsers__image" src={result.picture.large} alt="whoReadAboutHealth" />
                    <figcaption className='dataUsers__name'>
                        {result.name.first} {result.name.last}
                    </figcaption>

                </figure>

            )
        })

        console.log(myData)
        return (
            <div className='listUsers'>
                <Route render={() => (permission ? myData : <Redirect to={PATH_ROUTER.login} />)} />
            </div>

      );
 }
  
 export default AdminPage;


