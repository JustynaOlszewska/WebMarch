import React from 'react';
import {Link} from "react-router-dom";
import { PATH_ROUTER } from "../constants";

const showInformationVegetables = () => {
 
    return ( 
        <>
        <h1 className="headDescription">
Description of the cultivation and care of vegetables:
        </h1>
        <p className="textDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate reiciendis sed delectus. Sapiente nostrum aspernatur, a facere odio ducimus quae consequuntur cumque iste quisquam nemo totam recusandae commodi nulla rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis odit neque incidunt. Ab fugiat minus sapiente maxime sunt architecto. Ea hic, illum architecto iste blanditiis tempora! Vel tempora quidem nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias qui ab optio voluptatem iste tempora reprehenderit velit tenetur. Consectetur facilis esse temporibus architecto veniam doloremque molestiae nobis pariatur vol
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus eveniet exercitationem eligendi error distinctio, quas eos, adipisci modi officia ipsum perferendis veritatis nisi harum asperiores quod quam. Repudiandae, ipsam?
        </p>
        
        <Link className="linkDescription" to={PATH_ROUTER.garden}>Go back to the previous page.</Link>
        </>


     );
}
 
export default showInformationVegetables;