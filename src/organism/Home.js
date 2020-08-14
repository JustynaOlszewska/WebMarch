import React from 'react';
import "../style/sass/_home.scss";
import higherOrderComponent from "../HOC/higherOrderComponent"
import { articles } from "../utility"


const Home = (props) => {
  console.log('ble', props.ble)
const articlesList = articles.map(article=> {
  return(
    <ul key={article.title} className="articleList">
    <h2 className="articleHSmaller">{article.title} </h2>
    <p className="articleText">{article.text}</p>
</ul>
  )
  
})
    return (
      <div className="articleWrapper">
        <h1 className="articleH">
        Several articles on health.</h1>
       
{articlesList}
        
</div>
      );
}
 
export default higherOrderComponent(Home);