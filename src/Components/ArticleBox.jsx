import { ArticleCard } from "./ArticleCard";
import { useEffect, useState } from "react";
import { getAllArticles } from "../api calls/api";

const ArticleBox = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)


useEffect(() => {
setLoading(true);
getAllArticles()
.then((response)=> response.json())
.then((body) => {
    setArticles(body.articles)
    setLoading(false)
})
},[])

if(loading===true){
    return <h2>Loading....</h2>
}

else return (
<div>
{articles.map((article) => {
return <ArticleCard 
title ={article.title}
author={article.author}
img={article.article_img_url}
topic ={article.topic}/>
    
})}
</div>
)
}

export default ArticleBox