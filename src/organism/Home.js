import React from 'react';
import "../style/sass/_home.scss";

const articles = [{title:"Moving is healthy", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla quis qui libero voluptatum. Eveniet sit, mollitia consequatur, harum consequuntur libero earum nam tempore ipsum iusto delectus voluptatem nesciunt architecto!"},{title:"Eat vegetables and fruits", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla quis qui libero voluptatum. Eveniet sit, mollitia consequatur, harum consequuntur libero earum nam tempore ipsum iusto delectus voluptatem nesciunt architecto!"},{title:"Coffee and the pyramid of health", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla quis qui libero voluptatum. Eveniet sit, mollitia consequatur, harum consequuntur libero earum nam tempore ipsum iusto delectus voluptatem nesciunt architecto!"}];

const Home = () => {
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
 
export default Home;